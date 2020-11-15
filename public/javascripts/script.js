class UI {
    static handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    };

    activatePad = () => {
        $(`#${this.props.id}`).removeClass("darken-2");
        this.setState({
            padStyle: activeStyle,
        });
    };
    static playSound = (e) => {
        console.log(e);
        if (e.type == "click") {
            let aud = $(e.target).parent().find("audio")[0];
            $(e.target).css({
                border: "1px solid aliceblue",
                position: "relative",
                bottom: "4px",
                background: "#a39f9f",
            });

            setTimeout(() => {
                $(e.target).css({
                    border: "none",
                    background: "#616161",
                    position: "relative",
                    bottom: "0px",
                });
            }, 100);
            aud.currentTime = 0;
            $("#display").text(e.target.id);

            aud.play();
            if (aud.currentTime == aud.duration) {
                aud.pause();
                aud.currentTime = 0;
            }
        }
        if (e.type == "keydown") {
            let buttons = document.querySelectorAll("button");

            buttons.forEach((btn) => {
                if (btn.dataset.key == e.key.toUpperCase()) {
                    btn.click();
                }
            });
        }
    };
}

$(document).ready(function() {
    //Play audio
    document.body.addEventListener("keydown", (e) => {
        UI.playSound(e);
    });
    let auds = document.querySelectorAll("audio");
    auds.forEach((aud) => {
        aud.oncanplay = (e) => {
            console.log(e.target + " ready");
        };
    });
    $(".play-btn").click((e) => {
        UI.playSound(e);
    });

    window.onload = (e) => {
        e.preventDefault();
    };
});