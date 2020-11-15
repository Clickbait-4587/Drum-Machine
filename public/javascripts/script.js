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
    playSound = () => {
        let padClip = this.props.id;
        console.log(padClip);
        $("#display").text(padClip);
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        try {
            sound.play();
        } catch (error) {
            console.log(error);
        }

        this.activatePad();
        setTimeout(() => this.deactivatePad(), 100);
    };
}

$(document).ready(function() {
    //Play audio
    let auds = document.querySelectorAll("audio");
    auds.forEach((aud) => {
        aud.oncanplay = (e) => {
            console.log(e.target + " ready");
        };
    });
    $(".play-btn").click((e) => {
        let aud = $(e.target).parent().find("audio")[0];
        aud.currentTime = 0;
        $("#display").text(e.target.id);
        aud.play();
    });

    window.onload = (e) => {
        e.preventDefault();
    };
});