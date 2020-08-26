// ボタンを押してmy_handに格納


button("#gu_btn");
button("#cho_btn");
button("#par_btn");

if ($("header").is("#judgement")) {
  $(".battle_area").toggle();
}
let click_flg = true;

function button(hand_type) {
  $(hand_type).on("click", function () {
    if (click_flg) {
      click_flg = false;
      const enemy_hand = janken();
      // 自分の手をmy_handに格納
      const my_hand = hand_select(hand_type);

      if (my_hand == "グー") {
        $("#cho_btn").hide();
        $("#par_btn").hide();
      } else if (my_hand == "チョキ") {
        $("#par_btn").hide();
        $("#gu_btn").hide();
      } else if (my_hand == "パー") {
        $("#gu_btn").hide();
        $("#cho_btn").hide();
      }

      if (enemy_hand == "グー") {
        $("#cho_btn_2").hide();
        $("#par_btn_2").hide();
      } else if (enemy_hand == "チョキ") {
        $("#par_btn_2").hide();
        $("#gu_btn_2").hide();
      } else if (enemy_hand == "パー") {
        $("#gu_btn_2").hide();
        $("#cho_btn_2").hide();
      }

      $("#pc_hands").text("コンピュータ：" + enemy_hand);
      janken_result(my_hand, enemy_hand);
    }
  });
}

function janken() {
  const num = Math.ceil(Math.random() * 3);
  let hand = "";

  if (num == 1) {
    hand = "グー";
  } else if (num == 2) {
    hand = "チョキ";
  } else if (num == 3) {
    hand = "パー";
  }
  return hand;
}

function hand_select(hand_type) {
  let my_hand = "";
  if (hand_type == "#gu_btn") {
    my_hand = "グー";
  } else if (hand_type == "#cho_btn") {
    my_hand = "チョキ";
  } else if (hand_type == "#par_btn") {
    my_hand = "パー";
  }
  return my_hand;
}

function janken_result(my_hand, enemy_hand) {
  if (my_hand == "グー") {
    if (enemy_hand == "チョキ") {
      // alert("You Win!");
      $("#judgement").html("<h1>You Win!</h1>");
    } else if (enemy_hand == "グー") {
      // alert("Draw!");
      $("#judgement").html("<h1>Draw!</h1>");
    } else if (enemy_hand == "パー") {
      // alert("You lose...");
      $("#judgement").html("<h1>You lose...</h1>");
    }
  } else if (my_hand == "チョキ") {
    if (enemy_hand == "パー") {
      $("#judgement").html("<h1>You win!</h1>");
    } else if (enemy_hand == "チョキ") {
      $("#judgement").html("<h1>Draw!</h1>");
    } else if (enemy_hand == "グー") {
      $("#judgement").html("<h1>You lose...</h1>");
    }
  } else if (my_hand == "パー") {
    if (enemy_hand == "グー") {
      $("#judgement").html("<h1>You win!</h1>");
    } else if (enemy_hand == "パー") {
      $("#judgement").html("<h1>Draw!</h1>");
    } else if (enemy_hand == "チョキ") {
      $("#judgement").html("<h1>You lose...</h1>");
    }
  }
}
