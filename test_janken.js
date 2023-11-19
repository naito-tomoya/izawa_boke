const start_janken = (id) => {
    show_my_hand(id);
    let opponent_hand = show_opponent_hand();
    const result = document.getElementById("result");

    //グー
    if (id === "gu") {
        switch (opponent_hand) {
            case 0:
                result.innerHTML = "あいこ"
                result.style.color = "#000000";
                break;
            case 1:
                result.innerHTML = "勝ち！！！"
                result.style.color = "#FF0000";
                break;
            case 2:
                result.innerHTML = "負け、、、"
                result.style.color = "#0000FF";
                break;
            default:
                break;
        }
        //チョキ
    } else if (id === "choki") {
        switch (opponent_hand) {
            case 0:
                result.innerHTML = "負け、、、"
                result.style.color = "#0000FF";
                break;
            case 1:
                result.innerHTML = "あいこ"
                result.style.color = "#000000";
                break;
            case 2:
                result.innerHTML = "勝ち！！！"
                result.style.color = "#FF0000";
                break;
            default:
                break;
        }
        //パー
    } else if (id === "pa") {
        switch (opponent_hand) {
            case 0:
                result.innerHTML = "勝ち！！！"
                result.style.color = "#FF0000";
                break;
            case 1:
                result.innerHTML = "負け、、、"
                result.style.color = "#0000FF";
                break;
            case 2:
                result.innerHTML = "あいこ"
                result.style.color = "#000000";
                break;
            default:
                break;
        }
    }
}

const show_opponent_hand = () => {
    const opponent_hand_display = document.getElementById("opponent_hand")

    var random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            opponent_hand_display.innerHTML = `<image src="./グー.jpg" class="janken_image"></image>`
            break;
        case 1:
            opponent_hand_display.innerHTML = `<image src="./チョキ.jpg" class="janken_image"></image>`
            break;
        case 2:
            opponent_hand_display.innerHTML = `<image src="./パー.jpg" class="janken_image"></image>`
            break;
        default:
            break;
    }

    return random;
}
const show_my_hand = (id) => {
    const gu_image = document.getElementById("gu_image")
    const choki_image = document.getElementById("choki_image")
    const pa_image = document.getElementById("pa_image")

    if (id === "gu") {
        gu_image.style.filter = "grayscale(0%)";
        choki_image.style.filter = "grayscale(100%)";
        pa_image.style.filter = "grayscale(100%)";
    } else if (id === "choki") {
        gu_image.style.filter = "grayscale(100%)";
        choki_image.style.filter = "grayscale(0%)";
        pa_image.style.filter = "grayscale(100%)";
    } else if (id === "pa") {
        gu_image.style.filter = "grayscale(100%)";
        choki_image.style.filter = "grayscale(100%)";
        pa_image.style.filter = "grayscale(0%)";
    }
}