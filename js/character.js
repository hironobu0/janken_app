character_tag = [
  ["#yuusha", '<img class="main_image" src="../img/yuusya_game.png" alt="">'],
  ["#china", '<img class="main_image" src="../img/china_benpatsu.png" alt="">'],
  [
    "#sanzoku",
    '<img class="main_image" src="../img/character_sanzoku.png" alt="">',
  ],
  ["#robot", '<img class="main_image" src="../img/robot_cyborg.png" alt="">'],
  ["#yakuza", '<img class="main_image" src="../img/yakuza_kowai.png" alt="">'],
  ["#gal", '<img class="main_image" src="../img/gal.png" alt="">'],
  [
    "#majokko",
    '<img class="main_image" src="../img/majo_girl_majokko.png" alt="">',
  ],
  [
    "#necromancer",
    '<img class="main_image" src="../img/mahoutsukai_necromancer.png" alt="">',
  ],
  [
    "#maou",
    '<img class="main_image" src="../img/fantasy_maou_devil.png" alt="">',
  ],
];

$(".battle_area").hide();

for (const value of character_tag) {
  $(value[0]).hover(
    function () {
      if ($("header").is("#my_side")) {
        $(".my_character").append(value[1]);
      } else if ($("header").is("#enemy_side")) {
        $(".enemy_character").append(value[1]);
      }
    },
    function () {
      if ($("header").is("#my_side")) {
        $(".my_character").find("img:last").remove();
      } else if ($("header").is("#enemy_side")) {
        $(".enemy_character").find("img:last").remove();
      }
    }
  );

  $(value[0]).on("click", function () {
    if ($("header").is("#my_side")) {
      // $(".my_character").append(value[1]);
      $("header").html("<h1>Select enemy character!</h1>");
      $("header").attr("id", "enemy_side");
    } else if ($("header").is("#enemy_side")) {
      // $(".enemy_character").append(value[1]);
      $("header").html("<h1>Battle start!</h1>");
      $("header").attr("id", "judgement");
      if ($("header").is("#judgement")) {
        $(".battle_area").toggle();
      }
    }
  });
}

// // while (stage == 4) {

// // }

// if ($("header").is(".my_side")) {
//   for (const value of character_tag) {
//     $(value[0]).hover(
//       function () {
//         $(".my_character").append(value[1]);
//       },
//       function () {
//         $(".my_character").find("img:last").remove();
//       }
//     );

//     $(value[0]).on("click", function () {
//       $(".my_character").append(value[1]);
//       $("header").html("<h1>Select enemy character!</h1>");
//       $("header").addClass("enemy_side");
//     });
//   }
// } else {
//   for (const value of character_tag) {
//     $(value[0]).hover(
//       function () {
//         $(".enemy_character").append(value[1]);
//       },
//       function () {
//         $(".enemy_character").find("img:last").remove();
//       }
//     );

//     $(value[0]).on("click", function () {
//       $(".enemy_character").append(value[1]);
//     });
//   }
// }

// for (const value of character_tag) {
//   $(value[0]).hover(
//     function () {
//       $(".enemy_character").append(value[1]);
//     },
//     function () {
//       $(".enemy_character").find("img:last").remove();
//     }
//   );

//   $(value[0]).on("click", function () {
//     $(".enemy_character").append(value[1]);
//     $("header").html("<h1>Select enemy character!</h1>");
//   });
// }

// for (const value of character_tag) {
//   $(value[0]).hover(
//     function () {
//       $(".my_character").append(value[1]);
//     },
//     function () {
//       $(".my_character").find("img:last").remove();
//     }
//   );

//   $(value[0]).on("click", function () {
//     $(".my_character").append(value[1]);
//     $("header").html("<h1>Select enemy character!</h1>");
//   });
// }

// $("#yuusha").hover(
//   function () {
//     $(".my_character").append($('<img src="../img/yuusya_game.png" alt="">'));
//   },
//   function () {
//     $(".my_character").find("img:last").remove();
//   }
// );
