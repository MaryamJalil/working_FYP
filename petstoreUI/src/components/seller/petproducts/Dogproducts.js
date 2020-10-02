import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

import dogfood from './img/dogfood.jpg';
import dogfood1 from './img/dogfood1.jpg';
import dogfood2 from './img/dogfood2.jpg';
import dogsofa from './img/dogsofa.jpg';
import dogtravel from './img/dogtravel.jpg';
import sofa1 from './img/sofa1.jpg';
import cage from './img/cage.jfif';
import dogfood3 from './img/dogfood3.png';
import bath from './img/bath.jpg'
import dogtoy from './img/dogtoy.jpg';
import dogfood4 from './img/dogfood4.jpg';
import chain from './img/chain.jpg';


 
export default class Dogproducts extends Component {
    render() {
        return (
          <div className="container">
 

<div style={{marginLeft:"65px", marginTop:"30px"}}>
                <Accordion defaultActiveKey="0">
  <Card border="dark" >
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Category
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Dogs Category</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
</div>
{/* dog food */}

<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={dogfood} />
    <Card.Body>
      <Card.Title>Amazon Brand - Wag Dry Dog Food, 35% Protein, No Added Grains (Beef, Salmon, Turkey, Lamb)</Card.Title>
      <Card.Text>
      Real American salmon is the #1 ingredient to give your pup a delicious blend
Nutritious vegetables like lentils and peas provide vitamins, minerals, antioxidants, a
nd phytonutrients; salmon oil and flaxseed provide omega-3 fatty acids, including long-chain DHA.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={dogfood1}/>
    <Card.Body>
      <Card.Title>Rachael Ray Nutrish Chicken & Veggies Dry Dog Food
</Card.Title>
      <Card.Text>
      Contains 1 - 28 Pound Bag of Dry Dog Food
U.S. farm-raised chicken is the #1 ingredient
No poultry by-product meal, filler, wheat, or wheat gluten ingredients
Natural dog food with added vitamins & minerals
Safely USA cooked with the world's best ingredients{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={dogfood2} />
    <Card.Body>
      <Card.Title>Pedigree Adult Dry Dog Food, Chicken & Steak
</Card.Title>
      <Card.Text>
      Contains One (1) 33 Lb. Bag Of Pedigree Complete Nutrition Adult Dry Dog Food Grilled Steak & Vegetable Flavor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
</CardGroup>
</div>

<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={dogtoy} />
    <Card.Body>
      <Card.Title>Dog Chew Toy </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={chain}/>
    <Card.Body>
      <Card.Title>Dog Chain</Card.Title>
      <Card.Text>
      Dog Bones outside is non-toxic tasteless bit of resistant rubber material,Squeak Toys inside the ball and voice is a 
      very fun little bells,Will be issued a ringing of the bell,attract their attention,the design of the elastic,in the process 
      of playing from harm,
       is the ideal ball toys.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={dogfood4} />
    <Card.Body>
      <Card.Title>  Solimo Basic Dry Dog Food with Grains (Chicken or Beef Flavor)</Card.Title>
      <Card.Text>
      If you like PEDIGREE or PURINA DOG CHOW, we invite you to try Solimo Basic Dry Dog Food.
Complete and balanced nutrition with essential nutrients from carbohydrates, protein, fat, vitamins and minerals
No artificial flavors
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
</CardGroup>
</div>

<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={dogfood3} />
    <Card.Body>
      <Card.Title>IAMS PROACTIVE HEALTH Minichunks Dry Dog Food, Chicken
</Card.Title>
      <Card.Text>
      Contains one (1) 30 lb. bag of IAMS PROACTIVE HEALTH Adult Minichunks Dry Dog Food Chicken
1st ingredient is real, farm-raised chicken, and features smaller kibble size
Promotes healthy digestion with a tailored blend of wholesome fibers and prebiotics
Builds strong muscles with quality protein sourced from real chicken
Supports a strong immune system with antioxidants
Veterinarians recommend IAMS
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={bath}/>
    <Card.Body>
      <Card.Title>Jasonwell Foldable Dog Pet Bath Pool Collapsible Dog Pet Pool Bathing Tub Kiddie Pool for Dogs Cats and Kids
</Card.Title>
      <Card.Text>
      PORTABLE: foldable, easy to store and bring with you and your dog everywhere
SIMPLE:No need of inflation,set up in no time. With bottom/side drain, easy to drain and refresh water
SLIP RESISTANT & DURABLE: made of extra-tough PVC. Thicker slip resistant material on the bottom
Size: Available in 5 Sizes.S---32" x 8", M---39.5" x 12", L---48" x 12", XL---55.1" x 12", XXL---63" x 12"
Enviromentally friendly material: EN71,ASTM standard. Please TRIM your dogs' nails before using the pool.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={cage} />
    <Card.Body>
      <Card.Title>MidWest Homes for Pets Dog Crate | iCrate Single Door & Double Door Folding Metal Dog Crates | Fully Equipped</Card.Title>
      <Card.Text>
      ICrate the 'All Inclusive Dog Crate' Includes Free divider panel, durable dog tray, carrying handle, 4 'roller' Feet to protect floors & Midwest quality Guarantee 1 year Warranty
Medium Single door folding dog crate ideal for dog breeds w/ adult weight of 26 to 40 pounds, Convenient divider panel allows crate to expand as Your dog grows, iCrate measures 30 Length x 19 Width x 21 Height inches
Your dog's home while you're away from home: Durable Design creates a safe place for Your pet while you're away & caters to Your dog’s natural “den” instincts
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
</CardGroup>
</div>
<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={dogsofa} />
    <Card.Body>
      <Card.Title> Sofa Lounger Dog Bed - Available in Multiple Colors & Styles</Card.Title>
      <Card.Text>
      2” legs lift bed off floor, keeping your pet draft free
Storage pocket for toys and bones
Removable/washable cushion cover
Fits pets up to 30 lbs
Bed size is 34" x 22.25" x 15"
Cushion is 24" x 16". The height from the floor to the top of the cushion is 12".
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={sofa1}/>
    <Card.Body>
      <Card.Title>Enchanted Home Pet Quicksilver Sofa Dog Bed in Gray</Card.Title>
      <Card.Text>
      2” legs lift bed off floor, keeping your pet draft free
Storage pocket for toys and bones
Removable/washable cushion cover
Fits pets up to 30 lbs
Bed size is 34" x 22.25" x 15"
Cushion is 24" x 16". The height from the floor to the top of the cushion is 12".
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={dogtravel} />
    <Card.Body>
      <Card.Title>Whizzotech Adjustable Pet Carrier Backpack Pet Frontpack Carrier Travel Bag Legs Out Easy-Fit for Traveling Hiking Camping PB03</Card.Title>
      <Card.Text>
      Open top pet pouch carrier with legs out and tail out design let your pet feel comfortable and safe while keeping your hands free
Easy-access side zips, velcro elastic top closure
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
</CardGroup>
</div>




            </div>
        )
    }
}
