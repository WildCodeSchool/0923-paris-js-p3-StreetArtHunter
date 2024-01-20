/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const argon = require("argon2");
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    const userData = [
      {
        pseudo: "Chaton_Brutal",
        email: "chaton@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Soleil_Levant",
        email: "Soleil@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Ulysse_31",
        email: "Ulysse@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Big_Julius",
        email: "julius@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "RuBeat",
        email: "rubeat@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "El_Poutros",
        email: "LaPoutre@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "KoffeeMan",
        email: "kofee@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Yax2_94",
        email: "yaya@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Tristan",
        email: "tristan@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Yseult",
        email: "Yseult@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Drifer",
        email: "Drifer@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "LeoMiaou",
        email: "LeoMiaou@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "LuLu Star",
        email: "Lulustar@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Orel One",
        email: "orel@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "Mama Seni",
        email: "MamaInes@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "BrianShine",
        email: "PrinceBrillant@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "AlexCode",
        email: "AlexCode@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "TidusLove",
        email: "Tidus@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "SelineBoss",
        email: "Celine@glouglou.fr",
        password: "toto",
        score: 100,
        admin: 0,
      },
      {
        pseudo: "admin",
        email: "admin@glouglou.fr",
        password: "root",
        score: 0,
        admin: 1,
      },
    ];

    const hashingOptions = {
      type: argon.argon2id,
      memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
      timeCost: 2,
      parallelism: 1,
    };

    for (let i = 0; i < userData.length; i += 1) {
      const element = userData[i];
      // try {
      const hash = await argon.hash(element.password, hashingOptions);
      element.password = hash;
      console.info(element);
      queries.push(
        database.query(
          "INSERT INTO user (pseudo, email, password,  score, admin) VALUES (?, ?, ?, ?, ?)",
          [
            element.pseudo,
            element.email,
            element.password,
            element.score,
            element.admin,
          ]
        )
      );
      // } catch (error) {
      //   console.info(error);
      // }
    }

    const LocationData = [
      {
        name: "Paris 19",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget efficitur enim. Phasellus sodales pretium orci at finibus. Fusce tempor, ex vitae tristique sagittis, tortor ex scelerisque lectus, eu maximus ante turpis quis tortor.",
        image: "../frontend/src/assets/images/works_sample/20231210_143137.jpg",
      },
      {
        name: "Paris 20",
        description:
          "Nunc mollis ultrices tristique. Proin vitae elit nec risus faucibus mattis. Sed sem lorem, volutpat non congue at, dapibus nec dui. Fusce a cursus augue. Nam commodo dolor eget risus posuere, ut efficitur leo facilisis. Integer et sapien non tellus consectetur lobortis.",
        image: "../frontend/src/assets/images/works_sample/20231203_143211.jpg",
      },

      {
        name: "Aubervilliers 93",
        description:
          "Quisque dolor dui, condimentum sed porta in, ornare id ipsum. Praesent gravida congue vulputate. Suspendisse eget nibh vitae ante ultricies aliquet nec ut odio. Donec tincidunt nec lectus at.",
        image: "../frontend/src/assets/images/works_sample/20231209_124929.jpg",
      },

      {
        name: "Paris 13",
        description:
          "Nam commodo dolor eget risus posuere, ut efficitur leo facilisis. Integer et sapien non tellus consectetur lobortis.",
        image: "../frontend/src/assets/images/works_sample/20231203_141600.jpg",
      },
    ];

    for (let i = 0; i < LocationData.length; i += 1) {
      const element = LocationData[i];
      // try {
      queries.push(
        database.query(
          "INSERT INTO location (name, description, image) VALUES (?, ?, ?)",
          [element.name, element.description, element.image]
        )
      );
      // } catch (error) {
      //   console.info(error);
      // }
    }
    const ArtistData = [
      {
        pseudo: "space invader",
      },
      {
        pseudo: "toto",
      },
      {
        pseudo: "sohan STREET",
      },
      {
        pseudo: "Peodrô!",
      },
      {
        pseudo: "Yarps",
      },
      {
        pseudo: "le Long",
      },
      {
        pseudo: "Meton Joffily",
      },
      {
        pseudo: "Jack Ardi",
      },
      {
        pseudo: "Warch RestA",
      },
      {
        pseudo: "Mister Topy",
      },
      {
        pseudo: "Lasky",
      },
      {
        pseudo: "Peak LHS",
      },
      {
        pseudo: "Nô",
      },
      {
        pseudo: "SkiQ",
      },
      {
        pseudo: "Dacruz",
      },
    ];

    for (let i = 0; i < ArtistData.length; i += 1) {
      const element = ArtistData[i];
      // try {
      queries.push(
        database.query("INSERT INTO artist(pseudo) VALUES (?)", [
          element.pseudo,
        ])
      );
      // } catch (error) {
      //   console.info(error);
      // }
    }
    const WorksData = [
      {
        latitude: 48.52204,
        longitude: 2.22369,
        image: "../frontend/src/assets/images/works_sample/20231203_141600.jpg",
        User_id: 1,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52202,
        longitude: 2.22414,
        image: "../frontend/src/assets/images/works_sample/20231203_142006.jpg",
        User_id: 2,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52202,
        longitude: 2.22414,
        image: "../frontend/src/assets/images/works_sample/20231203_142530.jpg",
        User_id: 3,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52204,
        longitude: 2.22414,
        image: "../frontend/src/assets/images/works_sample/20231203_142754.jpg",
        User_id: 1,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.5218,
        longitude: 2.22426,
        image: "../frontend/src/assets/images/works_sample/20231203_143211.jpg",
        User_id: 2,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52197,
        longitude: 2.22594,
        image: "../frontend/src/assets/images/works_sample/20231203_145223.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52198,
        longitude: 2.23013,
        image: "../frontend/src/assets/images/works_sample/20231203_151236.jpg",
        User_id: 3,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52175,
        longitude: 2.23084,
        image: "../frontend/src/assets/images/works_sample/20231203_151510.jpg",
        User_id: 1,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.5218,
        longitude: 2.23164,
        image: "../frontend/src/assets/images/works_sample/20231203_152225.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52101,
        longitude: 2.23196,
        image: "../frontend/src/assets/images/works_sample/20231203_153148.jpg",
        User_id: 3,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.52072,
        longitude: 2.23222,
        image: "../frontend/src/assets/images/works_sample/20231203_164644.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 2,
      },
      {
        latitude: 48.53554,
        longitude: 2.22567,
        image: "../frontend/src/assets/images/works_sample/20231209_124017.jpg",
        User_id: 5,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.53568,
        longitude: 2.22557,
        image: "../frontend/src/assets/images/works_sample/20231209_124153.jpg",
        User_id: 1,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54016,
        longitude: 2.22528,
        image: "../frontend/src/assets/images/works_sample/20231209_124609.jpg",
        User_id: 12,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54016,
        longitude: 2.22526,
        image: "../frontend/src/assets/images/works_sample/20231209_124642.jpg",
        User_id: 2,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54042,
        longitude: 2.22513,
        image: "../frontend/src/assets/images/works_sample/20231209_124929.jpg",
        User_id: 1,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54173,
        longitude: 2.22459,
        image: "../frontend/src/assets/images/works_sample/20231209_130034.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54173,
        longitude: 2.22459,
        image: "../frontend/src/assets/images/works_sample/20231209_130053.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54171,
        longitude: 2.22477,
        image: "../frontend/src/assets/images/works_sample/20231209_130147.jpg",
        User_id: 5,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.54171,
        longitude: 2.22477,
        image: "../frontend/src/assets/images/works_sample/20231209_130215.jpg",
        User_id: 6,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.5417,
        longitude: 2.22495,
        image: "../frontend/src/assets/images/works_sample/20231209_130347.jpg",
        User_id: 2,
        isValidate: 0,
        location_id: 3,
      },
      {
        latitude: 48.5417,
        longitude: 2.22495,
        image: "../frontend/src/assets/images/works_sample/20231209_130553.jpg",
        User_id: 6,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.5417,
        longitude: 2.22495,
        image: "../frontend/src/assets/images/works_sample/20231209_130652.jpg",
        User_id: 4,
        isValidate: 1,
        location_id: 3,
      },
      {
        latitude: 48.5322,
        longitude: 2.23167,
        image: "../frontend/src/assets/images/works_sample/20231210_141824.jpg",
        User_id: 5,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53205,
        longitude: 2.23134,
        image: "../frontend/src/assets/images/works_sample/20231210_142701.jpg",
        User_id: 3,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53205,
        longitude: 2.23134,
        image: "../frontend/src/assets/images/works_sample/20231210_143012.jpg",
        User_id: 8,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53205,
        longitude: 2.23134,
        image: "../frontend/src/assets/images/works_sample/20231210_143031.jpg",
        User_id: 11,
        isValidate: 0,
        location_id: 1,
      },
      {
        latitude: 48.53205,
        longitude: 2.23134,
        image: "../frontend/src/assets/images/works_sample/20231210_143137.jpg",
        User_id: 8,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53265,
        longitude: 2.23046,
        image: "../frontend/src/assets/images/works_sample/20231210_144731.jpg",
        User_id: 6,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53252,
        longitude: 2.23025,
        image: "../frontend/src/assets/images/works_sample/20231210_144909.jpg",
        User_id: 6,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53155,
        longitude: 2.22442,
        image: "../frontend/src/assets/images/works_sample/20231210_145717.jpg",
        User_id: 7,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53119,
        longitude: 2.2239,
        image: "../frontend/src/assets/images/works_sample/20231210_150219.jpg",
        User_id: 12,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53043,
        longitude: 2.22291,
        image: "../frontend/src/assets/images/works_sample/20231210_150935.jpg",
        User_id: 7,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53043,
        longitude: 2.22291,
        image: "../frontend/src/assets/images/works_sample/20231210_151217.jpg",
        User_id: 12,
        isValidate: 1,
        location_id: 1,
      },
      {
        latitude: 48.53155,
        longitude: 2.22442,
        image: "../frontend/src/assets/images/works_sample/20231210_145852.jpg",
        User_id: 7,
        isValidate: 0,
        location_id: 1,
      },
    ];

    for (let i = 0; i < WorksData.length; i += 1) {
      const element = WorksData[i];
      // try {
      queries.push(
        database.query(
          "INSERT INTO work(latitude,longitude,image,User_id,isValidate,location_id ) VALUES (?,?,?,?,?,?)",
          [
            element.latitude,
            element.longitude,
            element.image,
            element.User_id,
            element.isValidate,
            element.location_id,
          ]
        )
      );
      // } catch (error) {
      //   console.info(error);
      // }
    }

    const ArtistWorkData = [
      {
        artist_id: 3,
        work_id: 1,
      },
      {
        artist_id: 4,
        work_id: 2,
      },
      {
        artist_id: 5,
        work_id: 3,
      },
      {
        artist_id: 7,
        work_id: 4,
      },
      {
        artist_id: 15,
        work_id: 5,
      },
      {
        artist_id: 1,
        work_id: 10,
      },
      {
        artist_id: 2,
        work_id: 11,
      },
      {
        artist_id: 6,
        work_id: 13,
      },
      {
        artist_id: 8,
        work_id: 17,
      },
      {
        artist_id: 9,
        work_id: 20,
      },
      {
        artist_id: 10,
        work_id: 21,
      },
      {
        artist_id: 11,
        work_id: 22,
      },
      {
        artist_id: 12,
        work_id: 26,
      },
      {
        artist_id: 13,
        work_id: 27,
      },
      {
        artist_id: 6,
        work_id: 28,
      },
      {
        artist_id: 14,
        work_id: 29,
      },
      {
        artist_id: 6,
        work_id: 30,
      },
      {
        artist_id: 14,
        work_id: 31,
      },
      {
        artist_id: 3,
        work_id: 33,
      },
    ];
    for (let i = 0; i < ArtistWorkData.length; i += 1) {
      const element = ArtistWorkData[i];
      // try {
      queries.push(
        database.query(
          "INSERT INTO artist_work(artist_id,work_id ) VALUES (?,?)",
          [element.artist_id, element.work_id]
        )
      );
      // } catch (error) {
      //   console.info(error);
      // }
    }
    // Generating Seed Data

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    // console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
