export type Lang = "en" | "es";

export interface Dictionary {
  nav: { studio: string; work: string; contact: string; home: string; langLabel: string; openMenu: string; closeMenu: string };
  hero: {
    tagline: string;
    sayHello: string;
    close: string;
    scrollHint: string;
    cards: { title: string; description: string; extendedInfo: string[] }[];
  };
  studio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    greeting: string;
    p1: string;
    p2: string;
    principles: { title: string; text: string }[];
    basedInTitle: string;
    basedIn: string;
    chatTitle: string;
    chatText: string;
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    mainProduct: string;
    previous: string;
    next: string;
    closeModal: string;
    viewOnGithub: string;
    viewPage: string;
    getOnPlay: string;
    projects: Record<string, { type: string; short: string; full: string }>;
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    areas: { title: string; description: string }[];
    curiousTitle: string;
    curiosities: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    github: string;
    note: string;
    name: string;
    namePh: string;
    emailLabel: string;
    emailPh: string;
    topicLegend: string;
    topics: { id: string; label: string }[];
    message: string;
    messagePh: string;
    hint: string;
    sending: string;
    send: string;
    sentTitle: string;
    sentText: string;
    sentAgain: string;
    errorSend: string;
    notReady: string;
  };
  kompkit: {
    tagline: string;
    sub: string;
    parity: { title: string; subtitle: string; items: { title: string; text: string }[] };
    utilities: { title: string; subtitle: string; items: { text: string }[] };
    start: {
      title: string;
      subtitle: string;
      published: string;
      localOnly: string;
      webSub: string;
      flutterSub: string;
      androidSub: string;
      androidCode: string;
      androidNote: string;
      viewNpm: string;
      viewPub: string;
    };
    alpha: { pill: string; title: string; text: string; source: string; feedback: string };
    road: { title: string; subtitle: string; items: { title: string; text: string }[] };
    footer: { notice: string; noticeText: string; privacy: string; license: string };
  };
  footer: { made: string };
}
