# E-Commerce-website
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dog Shop</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #f9f9f9;
      color: #333;
    }
    header {
      background-color: #ff9800;
      color: white;
      padding: 15px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover { text-decoration: underline; }
    section { padding: 20px; }
    .dog-card, .product-card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin: 15px 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .dog-card img { width: 200px; border-radius: 8px; }
    h2 { color: #ff9800; }
    button {
      background-color: #ff9800;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover { background-color: #e68900; }
    form input, form textarea {
      width: 100%;
      padding: 8px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>🐶 Dog Shop</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#dogs">Dogs</a>
      <a href="#products">Products</a>
      <a href="#payment">Payment</a>
      <a href="#consultation">Consultation</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="home">
    <h2>Find Your Best Friend</h2>
    <p>Browse our collection of adorable dogs with full details.</p>
  </section>

  <section id="dogs">
    <h2>Available Dogs</h2>
    <div class="dog-card">
      <img src="labrador.jpg" alt="Labrador Retriever">
      <h3>Labrador Retriever</h3>
      <p><strong>Type:</strong> Family Dog</p>
      <p><strong>Diet:</strong> Dry kibble, chicken, rice</p>
      <p><strong>Medical Treatments:</strong> Deworming, flea control</p>
      <p><strong>Vaccinations:</strong> Rabies, Distemper, Parvovirus</p>
      <button>Buy Now</button>
    </div>
    <div class="dog-card">
      <img src="german_shepherd.jpg" alt="German Shepherd">
      <h3>German Shepherd</h3>
      <p><strong>Type:</strong> Guard Dog</p>
      <p><strong>Diet:</strong> Meat, dry food, vegetables</p>
      <p><strong>Medical Treatments:</strong> Hip dysplasia check, deworming</p>
      <p><strong>Vaccinations:</strong> Rabies, Distemper, Hepatitis</p>
      <button>Buy Now</button>
    </div>
    <div class="dog-card">
      <img src="beagle.jpg" alt="Beagle">
      <h3>Beagle</h3>
      <p><strong>Type:</strong> Companion Dog</p>
      <p><strong>Diet:</strong> Dry kibble, fish, vegetables</p>
      <p><strong>Medical Treatments:</strong> Ear infection check, deworming</p>
      <p><strong>Vaccinations:</strong> Rabies, Parvovirus, Leptospirosis</p>
      <button>Buy Now</button>
    </div>
  </section>

  <section id="products">
    <h2>Dog Products by Breed</h2>
    <div class="product-card">
      <h3>Labrador Retriever</h3>
      <ul>
        <li>Premium Dry Food</li>
        <li>Chew Toys</li>
        <li>Joint Supplements</li>
      </ul>
      <button>Buy Products</button>
    </div>
    <div class="product-card">
      <h3>German Shepherd</h3>
      <ul>
        <li>High Protein Food</li>
        <li>Training Leash</li>
        <li>Hip Care Supplements</li>
      </ul>
      <button>Buy Products</button>
    </div>
    <div class="product-card">
      <h3>Beagle</h3>
      <ul>
        <li>Small Breed Food</li>
        <li>Interactive Toys</li>
        <li>Ear Care Kit</li>
      </ul>
      <button>Buy Products</button>
    </div>
  </section>

  <section id="payment">
    <h2>UPI Payment</h2>
    <form>
      <label for="upi">Enter UPI ID:</label><br>
      <input type="text" id="upi" name="upi" placeholder="example@upi"><br><br>
      <label for="amount">Amount:</label><br>
      <input type="number" id="amount" name="amount"><br><br>
      <button type="submit">Pay Now</button>
    </form>
  </section>

  <section id="consultation">
    <h2>Free Consultation</h2>
    <p>Get expert advice on dog care, training, and health.</p>
    <form>
      <label for="cname">Name:</label><br>
      <input type="text" id="cname" name="cname"><br><br>
      <label for="cemail">Email:</label><br>
      <input type="email" id="cemail" name="cemail"><br><br>
      <label for="breed">Dog Breed:</label><br>
      <input type="text" id="breed" name="breed"><br><br>
      <label for="question">Your Question:</label><br>
      <textarea id="question" name="question"></textarea><br><br>
      <button type="submit">Request Consultation</button>
    </form>
  </section>

  <section id="contact">
    <h2>Customer Details</h2>
    <form>
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <label for="phone">Phone:</label><br>
      <input type="tel" id="phone" name="phone"><br><br>
      <label for="address">Address:</label><br>
      <textarea id="address" name="address"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2026 Dog Shop. All rights reserved.</p>
  </footer>
</body>
</html>
