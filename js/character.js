character_tag = [
  ["#yuusha", '<img src="../img/yuusya_game.png" alt="">'],
  ["#china", '<img src="../img/china_benpatsu.png" alt="">'],
  ["#sanzoku", '<img src="../img/character_sanzoku.png" alt="">'],
  ["#robot", '<img src="../img/robot_cyborg.png" alt="">'],
  ["#yakuza", '<img src="../img/yakuza_kowai.png" alt="">'],
  ["#gal", '<img src="../img/gal.png" alt="">'],
  ["#majokko", '<img src="../img/majo_girl_majokko.png" alt="">'],
  ["#necromancer", '<img src="../img/mahoutsukai_necromancer.png" alt="">'],
  ["#maou", '<img src="../img/fantasy_maou_devil.png" alt="">'],
];

for (const value of character_tag) {
  $(value[0]).hover(
    function () {
      $(".my_character").append(value[1]);
    },
    function () {
      $(".my_character").find("img:last").remove();
    }
  );
}

// $("#yuusha").hover(
//   function () {
//     $(".my_character").append($('<img src="../img/yuusya_game.png" alt="">'));
//   },
//   function () {
//     $(".my_character").find("img:last").remove();
//   }
// );
