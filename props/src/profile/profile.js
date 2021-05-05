import React from "react";
import propTypes from "prop-types";
import { Button } from "react-bootstrap";

const Myprofile = (props) => {
    console.log(props);
    const mystyle = {
        marginLeft: "200px",
        marginRight: "200px",
        textAlign: "justify"
    };
    function HandleName(name) {
        return alert(`Hi, I'am ${props.fullName}`);
    }
    return (
        <div>
            <div
                style={{
                    fontFamily: "Kaushan Script, cursive ",
                    fontSize: "85px"
                }}
            >
                {props.fullName}
            </div>
            <h3>{props.profession}</h3>
            {props.children}
            <div
                style={{
                    fontFamily: "Kaushan Script, cursive",
                    fontSize: "50px"
                }}
            >
                {props.bio}
            </div>

            <Button variant="outline-danger" onClick={HandleName}>
                Hello{" "}
            </Button>

            <p style={mystyle}>
                {" "}
                Galileo di Vincenzo Bonaiuti de' Galilei (15 February 1564 – 8
                January 1642) was an Italian astronomer, physicist and engineer,
                sometimes described as a polymath, from Pisa. Galileo has been
                called the "father of observational astronomy", the "father of
                modern physics", the "father of the scientific method", and the
                "father of modern science".
            </p>
            <p style={mystyle}>
                Galileo studied speed and velocity, gravity and free fall, the
                principle of relativity, inertia, projectile motion and also
                worked in applied science and technology, describing the
                properties of pendulums and "hydrostatic balances". He invented
                the thermoscope and various military compasses, and used the
                telescope for scientific observations of celestial objects. His
                contributions to observational astronomy include telescopic
                confirmation of the phases of Venus, observation of the four
                largest satellites of Jupiter, observation of Saturn's rings,
                and analysis of sunspots.
            </p>
        </div>
    );
};
Myprofile.defaultProps = {
    fullName: "This is the profile full name",
    profession: "This is the profile profession",
    bio: "This is the profile biography",
};

Myprofile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func,
};
export default Myprofile;
