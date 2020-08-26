
// ボタンを押してmy_handに格納
button("#gu_btn");
button("#cho_btn");
button("#par_btn");

function button(hand_type) {
  $(hand_type).on("click", function () {
    const enemy_hand = janken();
    // 自分の手をmy_handに格納
    const my_hand = hand_select(hand_type);
    $("#pc_hands").text("コンピュータ：" + enemy_hand);
    janken_result(my_hand, enemy_hand);
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
      $("#judgement").text("You win!");
    } else if (enemy_hand == "グー") {
      // alert("Draw!");
      $("#judgement").text("Draw");
    } else if (enemy_hand == "パー") {
      // alert("You lose...");
      $("#judgement").text("You lose...");
    }
  } else if (my_hand == "チョキ") {
    if (enemy_hand == "パー") {
      $("#judgement").text("You win!");
    } else if (enemy_hand == "チョキ") {
      $("#judgement").text("Draw");
    } else if (enemy_hand == "グー") {
      $("#judgement").text("You lose...");
    }
  } else if (my_hand == "パー") {
    if (enemy_hand == "グー") {
      $("#judgement").text("You win!");
    } else if (enemy_hand == "パー") {
      $("#judgement").text("Draw");
    } else if (enemy_hand == "チョキ") {
      $("#judgement").text("You lose...");
    }
  }
}
