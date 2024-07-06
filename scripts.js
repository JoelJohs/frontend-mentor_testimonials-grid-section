const cardData = [
  {
    avatar: "/images/image-daniel.jpg",
    title: "Daniel Clifford",
    subtitle: "Verified Graduate",
    boldText:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    normalText:
      "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    quotesImg: true,
    customClass: "purple-card",
  },
  {
    avatar: "/images/image-jonathan.jpg",
    title: "Jonathan Walters",
    subtitle: "Verified Graduate",
    boldText: "The team was very supportive and kept me motivated",
    normalText:
      "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    quotesImg: false,
    customClass: "gray-card",
  },
  {
    avatar: "/images/image-kira.jpg",
    title: "Kira Whittle",
    subtitle: "Verified Graduate",
    boldText: "Such a life-changing experience. Highly recommended!",
    normalText:
      " “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    quotesImg: false,
    customClass: "white-card",
  },
  {
    avatar: "/images/image-jeanette.jpg",
    title: "Jeanette Harmon",
    subtitle: "Verified Graduate",
    boldText: "An overall wonderful and rewarding experience ",
    normalText:
      "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    quotesImg: false,
    customClass: "white-small-card",
  },
  {
    avatar: "/images/image-patrick.jpg",
    title: "Patrick Abrams",
    subtitle: "Verified Graduate",
    boldText:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy. ",
    normalText:
      "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    quotesImg: false,
    customClass: "black-card",
  },
];

const testimonialCard = document.getElementById("testimonial-cards");

cardData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = `card ${card.customClass}`;

  cardElement.innerHTML = `
    <div class="card__header">
        <img src="${card.avatar}" alt="avatar" />
        <div class="card__header--names">
          <p class="card__header--names__name">${card.title}</p>
          <p class="card__header--names__grade">${card.subtitle}</p>
        </div>
    </div>
    <div class="card__content">
        <h2 class="card__content--bold">${card.boldText}</h2>
        <p class="card__content--normal">${card.normalText}</p>
    </div>
 `;

  if (card.quotesImg) {
    const quotesImgElement = document.createElement("div");
    quotesImgElement.className = "card__quotes";
    quotesImgElement.innerHTML = `<img src="/images/bg-pattern-quotation.svg" alt="quotes" class="quote"/>`;
    cardElement.appendChild(quotesImgElement);
  }

  testimonialCard.appendChild(cardElement);
});
