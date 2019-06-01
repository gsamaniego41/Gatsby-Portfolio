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
    ],
  },
  {
    id: 2,
    title: "Avengers Game",
    desc:
      "MyHouse is a real estate valuation tool developed to provide transparency and empowerment to homeowners throughout the lifecycle of home ownership.",
    thumb: avengersThumb,
    site: "https://avengers-game-vanillajs.netlify.com/",
    repo: "https://github.com/gsamaniego41/JavaScript-III",
    tech: ["HTML", "CSS", "Vanilla JavaScript"],
  },
  {
    id: 3,
    title: "Lambda Notes",
    desc:
      "MyHouse is a real estate valuation tool developed to provide transparency and empowerment to homeowners throughout the lifecycle of home ownership.",
    thumb: lambdaNotesThumb,
    site: "https://fe-projectweek-lambda-notes.netlify.com/",
    frontend: "https://github.com/gsamaniego41/front-end-project-week",
    backend: "https://github.com/gsamaniego41/back-end-project-week",
    tech: ["React", "CSS", "SQLite3", "Knex", "Node", "Express"],
  },
]
