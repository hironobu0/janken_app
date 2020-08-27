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
  [
    "#hatena",
    '<img class="main_image" src="../img/animal_dance_cat.png" alt="">',
  ],
];

$(".battle_area").hide();

for (const value of character_tag) {
  $(value[0]).hover(
    function () {
      if ($("header").is("#my_side")) {
        if (value[0] != "#hatena") {
          $(".my_character").append(value[1]);
        }
        $(value[0]).on("click", function () {
          if (value[0] == "#hatena" && $("header").is("#my_side")) {
            const value = Math.ceil(Math.random() * (character_tag.length - 1));
            $(".my_character").append(character_tag[value][1]);
          }

          $("header").html("<h1>Select enemy character!</h1>");
          $("header").attr("id", "enemy_side");
        });
      } else if ($("header").is("#enemy_side")) {
        if (value[0] != "#hatena") {
          $(".enemy_character").append(value[1]);
        }

        $(value[0]).on("click", function () {
          if (value[0] == "#hatena" && $("header").is("#enemy_side")) {
            const value = Math.ceil(Math.random() * (character_tag.length - 1));
            $(".enemy_character").append(character_tag[value][1]);
          }
          $("header").html("<h1>Battle start!</h1>");
          $("header").attr("id", "judgement");

          $(".battle_area").show();
        });
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
}
