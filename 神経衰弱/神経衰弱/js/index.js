

//一度開いた場所は非アクティブ化する
//１回目と２回目以降の処理を変える
var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eigft = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var number = [];
var c_num = 0;


for (let i = 0; i < 22; i++) {
    const min = 1;
    const max = 11;
    let num = Math.floor(Math.random() * (max + 1 - min)) + min;
    if (num === 1) {
        one++;
        if (one > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 2) {
        two++;
        if (two > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 3) {
        three++;
        if (three > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 4) {
        four++;
        if (four > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 5) {
        five++;
        if (five > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 6) {
        six++;
        if (six > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 7) {
        seven++;
        if (seven > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 8) {
        eigft++;
        if (eigft > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 9) {
        nine++;
        if (nine > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 10) {
        ten++;
        if (ten > 2) {
            i = i - 1;
            continue;
        }
    } if (num === 11) {
        eleven++;
        if (eleven > 2) {
            i = i - 1;
            continue;
        }
    }
    number[i] = num;
}

$(function () {
    // 仮カードの作成
    for (let i = 0; i < 22; i++) {
        // let num = i % 11 + 1;
        $(".board").append(`
        <div class="card">
        <img src="images/card-${("00" + number[i]).slice(-2)}.jpg" alt="${number[i]}" class="">
        <img src="images/card_back.png" alt="" class="front" onclick="check(event)">
        </div>
        `);
    }
});

var ch_card = true;
var firstcard, f_target;
var backTimer;
var count = 0;

var check = function (event) {
    if (backTimer) return;
    console.log(event);
    var parent = event.target.previousElementSibling;//img 絵
    console.log('parent', parent);
    $(event.target).addClass("hidden");
    if (ch_card) {
        // console.log('最初');
        ch_card = false;
        f_target = event.target;
        firstcard = parent.alt;
        // console.log('f_target',f_target);
        // console.log()
    } else if (firstcard === parent.alt) {
        // console.log('合ってる');
        ch_card = true;
        count++;
    } else {
        // console.log('合ってない');
        ch_card = true;
        // console.log(parent);
        // console.log(f_target);
        
        backTimer = setTimeout(function(){
            $(event.target).removeClass("hidden");//２枚目
            $(f_target).removeClass("hidden");//１枚目
            backTimer = NaN;
        }, 1000);
    }
    if(count===11){
        window.alert('全部開けました！！');
    }
}

var reset = function () {
    console.log('クリックされました')
    location.reload();
}
