import Feel from '../../lib/feel/feel.js';



const Homepage = function() {
    return (Feel.createElement("div", { className: "homepage bg-cyan pointer" },
            [
                Feel.createElement("div", { className: "waven-logo-container flex flex-center" },                
                    Feel.createElement("img", { className: "waven-logo", src: "/Images/waven_logo_with_text.png" })
                ),
            ]
        )
    )
}

Feel.addStylesheet("/Components/Homepage/Homepage.css");

export default Homepage;