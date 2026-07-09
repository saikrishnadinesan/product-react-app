import React from 'react'
import Navigation from './Navigation'

const ViewProduct = () => {
  return (
    <div>
    <Navigation />

    <div className="container mt-4">
        <div className="row g-4">

            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                        className="card-img-top"
                        alt="Product"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Nike Air Max</h5>
                        <p className="card-text">
                            Product Code: PRD001 <br />
                            Category: Shoes <br />
                            Brand: Nike <br />
                            Price: ₹7,999 <br />
                            Discount: 15% <br />
                            Stock: 25 <br />
                            Rating: 4.8/5
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                        className="card-img-top"
                        alt="Product"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Apple Watch</h5>
                        <p className="card-text">
                            Product Code: PRD002 <br />
                            Category: Smart Watch <br />
                            Brand: Apple <br />
                            Price: ₹39,999 <br />
                            Discount: 10% <br />
                            Stock: 12 <br />
                            Rating: 4.9/5
                        </p>
                    </div>
                </div>
            </div>

          
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
                        className="card-img-top"
                        alt="Product"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Samsung Galaxy S25</h5>
                        <p className="card-text">
                            Product Code: PRD003 <br />
                            Category: Smartphone <br />
                            Brand: Samsung <br />
                            Price: ₹79,999 <br />
                            Discount: 12% <br />
                            Stock: 18 <br />
                            Rating: 4.7/5
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                        className="card-img-top"
                        alt="Product"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Sony WH-1000XM5</h5>
                        <p className="card-text">
                            Product Code: PRD004 <br />
                            Category: Headphones <br />
                            Brand: Sony <br />
                            Price: ₹29,999 <br />
                            Discount: 20% <br />
                            Stock: 30 <br />
                            Rating: 4.9/5
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default ViewProduct