// id, title, desc, thumb, alt
import myhouseThumb from "../images/myhouse-desktop.png"
import avengersThumb from "../images/vanillajs-avengers-game.png"
import lambdaNotesThumb from "../images/lambda-notes-desktop.png"

export const projectSummary = [
  {
    id: 1,
    title: "MyHouse",
    desc:
      "MyHouse is a real estate valuation tool developed to provide transparency and empowerment to homeowners throughout the lifecycle of home ownership.",
    thumb: myhouseThumb,
    site: "https://myhouse.labs12-real-estate.now.sh/",
    repo: "https://github.com/labs12-real-estate/labs12-real-estate-FE",
    tech: [
      "React",
      "Redux",
      "node-sass",
      "AWS Amplify & Cognito",
      "Amazon S3",
      "Node",
      "Express",
      "Postgres",
      "GraphQL",
      "Figma",
    ],
  },
  {
    id: 2,
    title: "Avengers Game",
    desc:
      "Built during my third week as a student at Lambda School, this was my first site that incorporates HTML, CSS, and JavaScript DOM manipulation.",
    thumb: avengersThumb,
    site: "https://avengers-game-vanillajs.netlify.com/",
    repo: "https://github.com/gsamaniego41/JavaScript-III",
    tech: ["HTML", "CSS", "Vanilla JavaScript"],
  },
  {
    id: 3,
    title: "Lambda Notes",
    desc:
      "A full stack CRUD application, Lambda Notes is a culmination of everything I learned from weeks 5 to week 15 in Lambda School.",
    thumb: lambdaNotesThumb,
    site: "https://fe-projectweek-lambda-notes.netlify.com/",
    frontend: "https://github.com/gsamaniego41/front-end-project-week",
    backend: "https://github.com/gsamaniego41/back-end-project-week",
    tech: ["React", "CSS", "SQLite3", "Knex", "Node", "Express"],
  },
]
