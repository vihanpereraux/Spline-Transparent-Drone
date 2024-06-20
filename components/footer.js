export function Footer() {
    const footerHTMLContext =
        `
        <!-- trailer -->
            <div id="trailer_wrapper">
            <div id="shader"></div>
            <video autoplay muted loop preload id="trailer" src="./assets/vids/demo.mp4"></video>
        </div>

        <!-- scroll text -->
        <p id="scroll_text">scroll down</p>

        <!-- music stats -->
        <div id="music_stats">
            <p id="muted_label">[M] the chicago night</p>

            <div id="volume_bar_wrapper">
                <div class="volume_bar"></div>
                <div class="volume_bar"></div>
                <div class="volume_bar"></div>
                <div class="volume_bar"></div>
            </div>

            <audio id="background_score" loop src="./assets/music/score.mp3"></audio>
        </div>
    `

    return footerHTMLContext;
}