import React, {Component} from 'react';
import $ from 'jquery';
// import
class Login extends Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(".input").focusin(function() {
            $(this).find("span").animate({
                "opacity": "0"
            }, 200);
        });

        $(".input").focusout(function() {
            $(this).find("span").animate({
                "opacity": "1"
            }, 300);
        });

        $(".login").submit(function() {
            $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color": "#fff"});
            $(".submit").css({"background": "#2ecc71", "border-color": "#2ecc71"});
            $(".feedback").show().animate({
                "opacity": "1",
                "bottom": "-80px"
            }, 400);
            $("input").css({"border-color": "#2ecc71"});
            return false;
        });
    }

    render() {
        return (
            <div className="login">
                <form>
                    <fieldset>
                        <legend className="legend">Login</legend>

                        <div className="input">
                            <input type="email" placeholder="Email" required/>
                            <span>
                                <i className="fa fa-envelope-o"></i>
                            </span>
                        </div>

                        <div className="input">
                            <input type="password" placeholder="Password" required/>
                            <span>
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>

                        <button type="submit" className="submit">
                            <i className="fa fa-long-arrow-right"></i>
                        </button>

                    </fieldset>

                    <div className="feedback">
                        login successful
                        <br/>
                        redirecting...
                    </div>

                </form>
            </div>
        )

    }
}

export default Login;
