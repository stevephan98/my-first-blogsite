import React from 'react';
import pfp from '../profilepic.png';

const AboutPage = () => (
    <React.Fragment>
    <h1>About me</h1>
    <img src={pfp} alt="My face" width="194" height="240"/>
    <p>
        I am currently a Senior at the University of Virginia! I'm experienced in Java, Python, C++,
        Javascript, Matlab, and VHDL. I have also taken classes in integrated circuit design (VLSI), software development,
        and signal processing, which have equipped me with a strong understanding of how to develop and analyze software 
        and hardware solutions.
    </p>
    <p>
        In my freetime, I enjoy being involved Outdoors (the Outdoors Club at UVA), photography (I shoot with a full-frame Sony Mirrorless Camera),
        and cooking! I also love learning new things (this summer I started to learn Spanish) and look to restart my interest in music, especially with the piano, in the near future.
    </p>
    <p>
        If you have any questions or would like to reach out to me, then please feel free to send me an email at steve.phan132@gmail.com!
       
    </p>
    </React.Fragment>
);

export default AboutPage;