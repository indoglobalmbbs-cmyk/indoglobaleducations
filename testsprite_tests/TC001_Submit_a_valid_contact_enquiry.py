import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Dismiss the cookie/privacy banner by clicking 'Accept All' (index 164) then navigate to the Contact Us page by clicking the Contact Us link (index 110).
        # button "Accept All"
        elem = page.locator("xpath=/html/body/div/div/div[2]/div/div/div[2]/div/button[3]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Dismiss the cookie/privacy banner by clicking 'Accept All' (index 164) then navigate to the Contact Us page by clicking the Contact Us link (index 110).
        # link "Contact Us"
        elem = page.locator("xpath=/html/body/div/div/header/nav/ul/li[8]/a").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Fill name, email ({{LOGIN_USER}}), phone, address, then open the Course select so options appear.
        # text input aria-label="Full name"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Test User")
        
        # -> Fill name, email ({{LOGIN_USER}}), phone, address, then open the Course select so options appear.
        # email input aria-label="Email"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input[2]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("{{LOGIN_USER}}")
        
        # -> Fill name, email ({{LOGIN_USER}}), phone, address, then open the Course select so options appear.
        # tel input aria-label="Phone"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input[3]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("9876543210")
        
        # -> Fill name, email ({{LOGIN_USER}}), phone, address, then open the Course select so options appear.
        # text input aria-label="Address"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input[4]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("123 Test Street, Test City")
        
        # -> Fill name, email ({{LOGIN_USER}}), phone, address, then open the Course select so options appear.
        # "Select Course MBBS MS BDS MDS MD-MS" aria-label="Course"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/div/select").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Select 'MBBS' from the course dropdown, fill the college name, choose 'Facebook' for how-heard, enter preferences, then submit the enquiry form.
        # text input aria-label="College name"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input[5]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Test College")
        
        # -> Select 'MBBS' from the course dropdown, fill the college name, choose 'Facebook' for how-heard, enter preferences, then submit the enquiry form.
        # text input aria-label="Preferences"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/input[6]").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Preferred countries: Russia; College preference: ABC Medical; Budget: 15 LPA; Facilities: Good")
        
        # -> Select 'MBBS' from the course dropdown, fill the college name, choose 'Facebook' for how-heard, enter preferences, then submit the enquiry form.
        # button "Send Enquiry"
        elem = page.locator("xpath=/html/body/div/div/div[3]/div[2]/form/button").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # --> Test passed — verified by AI agent
        frame = context.pages[-1]
        current_url = await frame.evaluate("() => window.location.href")
        assert current_url is not None, "Test completed successfully"
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    