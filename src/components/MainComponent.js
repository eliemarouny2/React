import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';

class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         dishes: DISHES,
         selectedDish: null
      }
   }

   onDishSelect(dishId) {
      this.setState({ selectedDish: dishId });
   }

   render() {


      return (
         <div className="App">
            <Navbar dark color="secondary">
               <div className="container">
                  <NavbarBrand href="/">Confusion Resto</NavbarBrand>
               </div>
            </Navbar>

            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         </div>
      );
   }
}

export default Main;
