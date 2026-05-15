export interface ArmeniaChallenge {
  title: string;
  desc: string;
  icon: string;
}

export const armeniaChallenges: ArmeniaChallenge[] = [
  {
    title: 'Extreme Weather',
    desc: 'Expect bitterly cold winters. Students are advised to carry heavy thermal wear.',
    icon: '❄️',
  },
  {
    title: 'Language Barrier',
    desc: 'While the course is English, learning basic Armenian is essential for clinical practice.',
    icon: '🗣️',
  },
  {
    title: 'Cultural Shift',
    desc: 'Adapting to a new lifestyle and homesickness is common in the first semester.',
    icon: '🌍',
  },
];
