import "./style.css";

const Main = () => {
  const sets = [
    { imgSource: '/assets/retro.jpg',imgAlt : 'retro', imgId: '01', boldText: 'Reviving Retro PCs',pText : 'What happens when old PCs are given modern upgrades?'},
    { imgSource: '/assets/laptop.jpg',imgAlt : 'laptops', imgId: '02', boldText: 'Top 10 Laptops of 2022',pText : 'Our best picks for various needs and budgets.'},
    { imgSource: '/assets/gaming.jpg',imgAlt : 'gaming', imgId: '03', boldText: 'The Growth of Gaming',pText : 'How the pandemic has sparked fresh opportunities.'}
  ]
  sets.forEach((ele)=>{console.log(ele)});
  return (
    <main>
      <div className="main">
        <div className="first">
          <div className="image">
            <img
              src="/assets/desktopimg.jpg"
              alt="desktop image"
              className="desktop"
            />
            <img
              src="/assets/mobileimg.jpg"
              alt="mobile image"
              className="mobile"
            />
          </div>
          <div className="heading">
            <h1>The Bright Future of Web3.0?</h1>
          </div>
          <div className="text">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is it
              really fulfilling its promise?
            </p>
            <div className="btn">
              <button>READ MORE</button>
            </div>
            
          </div>
          <div className="new">
            <h2> New </h2>
            <div className="one" style={{paddingTop: '0px'}}>
              <a href="#">
                <strong>Hydrogen VS Electric Cars</strong>
              </a>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="one">
              <a href="#">
                <strong>The Downsides of AI Artistry</strong>
              </a>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="one" style={{ borderBottom: "0px" }}>
              <a href="#">
                <strong>Is VC Funding Drying Up?</strong>
              </a>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="second">
          {
            sets.map((set)=>(
              <div className="set" key={set.imgId}>
                <div className="setimg">
                  <img src={set.imgSource} alt={set.imgAlt}/>
                </div>
                <div className="set2">
                  <h3>{set.imgId}</h3>
                  <a href="#"><strong>{set.boldText}</strong></a>
                  <p>{set.pText}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default Main;
