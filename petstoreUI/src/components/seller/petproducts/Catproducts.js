import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import food from './img/food.jpg';
import toy from './img/toy.jpg';
import shelter from './img/shelter.jpg';
import toy1 from './img/toy1.jpg';
import clothes from './img/clothes.jpg';
import water from './img/water.jpg'
import food1 from './img/food1.jpg';
import living from './img/living.jpg';
import clothes1 from './img/clothes1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
import food4 from './img/food4.jpg';
import Breadcrumb from 'react-bootstrap/Breadcrumb'





export default class Catproducts extends Component {
    render() {
        return (
          <div className="container">
            
            <div style={{marginLeft:"65px",marginTop:"30px"}}>
            <Breadcrumb>
  <Breadcrumb.Item href="/seller/addproducts">Add Pet Products</Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/petproducts">
    Products
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/productsave">Save </Breadcrumb.Item>
</Breadcrumb>
</div>
            <div style={{marginLeft:"65px"}}>
                <Accordion defaultActiveKey="0">
  <Card border="dark" >
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" color="dark" >
        Category
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body >Cats Category</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
</div>
<div style={{marginLeft:"65px", marginTop:"30px"}}>

<CardGroup>
  <Card>
    <Card.Img variant="top" src={food} />
    <Card.Body>
      <Card.Title>Y YHY Cat Bowl
        </Card.Title>
      <Card.Text>
      Less Vomiting: the elevated cat bowl put a cat's mouth at a better position in relation to its stomach,
       it helps cat swallow more easily and alleviates their occasional vomiting.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Price : $18.39
</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={toy}/>
    <Card.Body>
      <Card.Title>Smart Interactive Cat Toy</Card.Title>
      <Card.Text>
      BALLS SPIN & ROLL: This addictive, 
      interactive cat toy is designed with 3 levels of tracks and 3 brightly colored moving balls to attract kitty’s attention!{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $9.35

</small>    </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={shelter} />
    <Card.Body>
      <Card.Title>Cat Couch </Card.Title>
      <Card.Text>
      Our double sided tape for cats is the fastest way to stop your furry friend’s scratching and clawing!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>    </Card.Footer>
  </Card>
</CardGroup>
</div>

<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={food1} />
    <Card.Body>
      <Card.Title>Raised Cat Bowls Elevated Stainless Steel Cat Bowls</Card.Title>
      <Card.Text>
      This cat food bowls Is Made Of Quality Manufactured Wood And The Bowls Made Of Quality Stainless Steel cat Bowls .{' '}

      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={living}/>
    <Card.Body>
      <Card.Title> Cat House with Bed </Card.Title>
      <Card.Text>
      Easy to assemble; collapsible design allows for space-saving storage;
       wipes clean; stylish shade of Grey coordinates well with almost any decor .{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={clothes1} />
    <Card.Body>
      <Card.Title> Bolbove Bro'Bear Cable Knit Turtleneck Sweater for  Cats Knitwear</Card.Title>
      <Card.Text>
      Measure the chest at its widest point all the way around for CHEST Girth; Measure length of pet's
       back from the base of the neck to the base of the tail for BACK Length (Excluding the tail). 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
</CardGroup>
</div>

<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={toy1} />
    <Card.Body>
      <Card.Title>Kitty Yarn Puffs Woolen Yarn Cat Toy </Card.Title>
      <Card.Text>
      Your cats love and attraction for catnip is undeniable.
       This interactive puff ball toy contains catnip which keeps your kitten's senses heightened and excited.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small> 
   </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={clothes}/>
    <Card.Body>
      <Card.Title>Cat Jacket Suit </Card.Title>
      <Card.Text>
      Cute costume designed specifically for cats and puppies, soft fabrics provides comfort..{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={water} />
    <Card.Body>
      <Card.Title>Cat Water Fountain Stainless Steel</Card.Title>
      <Card.Text>
      Pet fountain includes stainless steel top, 3 carbon filters, 2 cleaning brushes for the intake tube and the motor cavity and 1 mat.
       High grade stainless steel top is unbreakable, durable and easy to clean.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>     </Card.Footer>
  </Card>
</CardGroup>
</div>
<div style={{marginLeft:"65px", marginTop:"30px"}}>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={food3} />
    <Card.Body>
      <Card.Title>Meow Mix Original Dry Cat Food
</Card.Title>
      <Card.Text>
      Contains 1 - 22 Pound Bag of Dry Cat Food
100% complete and balanced nutrition
Provides all essential vitamins and minerals
High quality protein to help support strong, healthy muscles
Made in the USA
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={food4}/>
    <Card.Body>
      <Card.Title>Purina Fancy Feast Gravy Lovers Poultry & Beef Feast Collection Wet Cat Food Variety Packs
</Card.Title>
      <Card.Text>
      Chicken, Turkey and beef flavors cats love
100 percent complete and balanced nutrition
Tender, delicate bites for a tempting texture
Essential vitamins and minerals to support her overall health. Feeding directions: Feed an average size adult cat 1 can per 2.5 pounds of body weight daily; Feed up to twice this amount to kittens
Twenty Four (24) 3 Ounce Can Purina Fancy Feast Gravy Lovers Poultry & Beef Feast Collection Wet Cat Food Variety Pack{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Price : $13.99

</small>       </Card.Footer>
  </Card>
  <Card style={{marginLeft:"20px"}}>
    <Card.Img variant="top" src={food2} />
    <Card.Body>
      <Card.Title>Purina Cat Chow Hairball, Healthy Weight, Indoor Dry Cat Food, Indoor, 3.15 Pound (Pack of 4)</Card.Title>
      <Card.Text>
      Sold as "3.15 Pound (Pack of 4)"
Delicious recipe with accents of garden greens
Contains fewer calories than Purina Cat Chow Complete to help promote her healthy weight
Antioxidants help support her healthy immune system
Natural fiber blend to help control hairballs
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
