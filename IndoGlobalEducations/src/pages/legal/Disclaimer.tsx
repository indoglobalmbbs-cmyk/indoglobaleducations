import LegalPageLayout from './LegalPageLayout';

const Disclaimer = () => {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Disclaimer"
      description="This website is intended to provide practical education guidance and lead-generation information for students exploring MBBS abroad. It should not be treated as legal, immigration, medical, or regulatory advice."
    >
      <h2>No regulatory endorsement</h2>
      <p>
        References to MBBS abroad, medical universities, eligibility guidance,
        recognition, or study pathways are informational. They should not be
        interpreted as a claim that any foreign university is endorsed by the
        National Medical Commission or any other authority unless expressly
        confirmed by that authority.
      </p>

      <h2>No admission or visa guarantee</h2>
      <p>
        Indo Global Education does not guarantee admissions, scholarships,
        visas, licensing outcomes, or future professional eligibility in India
        or any other country.
      </p>

      <h2>Independent verification required</h2>
      <p>
        Users must independently confirm tuition fees, living costs, licensing
        requirements, internship structure, curriculum, language of instruction,
        and regulatory obligations directly with the relevant university,
        embassy, or official authority before committing funds or making travel
        decisions.
      </p>

      <h2>External content and policy changes</h2>
      <p>
        Universities, ministries, embassies, and regulators may change rules,
        documents, fee structures, or deadlines without notice. We are not
        responsible for changes made by third parties after content is
        published.
      </p>

      <h2>Advertising and communication platforms</h2>
      <p>
        Future use of Meta ads, Google ads, WhatsApp, or other third-party
        tools may support outreach, measurement, and communications. Those
        services remain subject to their own policies, technologies, and
        availability.
      </p>
    </LegalPageLayout>
  );
};

export default Disclaimer;
