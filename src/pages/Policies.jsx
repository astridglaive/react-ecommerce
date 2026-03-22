import React from 'react';

const Policies = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Grand Piece Store Policies</h1>
      
      <div className="card p-4 mb-4">
        <h3 className="mb-3">1. Joining the Pirate Crew</h3>
        <p>
          By accessing and using the Grand Piece Store, you accept and agree to be bound by the Pirate Code. If you do not agree to any of these terms, please do not use this site. The Grand Line awaits only those who follow the rules!
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">2. Devil Fruit Information</h3>
        <p>
          We strive to provide accurate Devil Fruit descriptions, images, and pricing. However, we do not guarantee that all information is error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. Some fruits may have unexpected abilities!
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">3. Peli and Payment</h3>
        <ul className="list-unstyled">
          <li><i className="fas fa-check-circle text-success me-2"></i>All prices are in Peli (One Piece currency) and subject to change without notice.</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>We accept payment via credit cards, debit cards, and treasure chests.</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Prices are subject to Marine taxation and World Government fees.</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>We reserve the right to refuse or cancel any order if you're on the Marines' most wanted list.</li>
        </ul>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">4. Shipping Across the Grand Line</h3>
        <ul className="list-unstyled">
          <li><i className="fas fa-truck text-primary me-2"></i>Shipping times are estimates and not guaranteed due to Sea Kings and Marine patrols.</li>
          <li><i className="fas fa-truck text-primary me-2"></i>Shipping costs are calculated at checkout based on your island location and package weight.</li>
          <li><i className="fas fa-truck text-primary me-2"></i>We are not responsible for delays caused by storms, Sea Kings, or Marine interference.</li>
          <li><i className="fas fa-truck text-primary me-2"></i>Risk of loss transfers to you once the package leaves the Thousand Sunny.</li>
        </ul>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">5. Returns and Refunds</h3>
        <ul className="list-unstyled">
          <li><i className="fas fa-undo text-warning me-2"></i>Returns are accepted within 30 days of purchase (one moon cycle).</li>
          <li><i className="fas fa-undo text-warning me-2"></i>Devil Fruits must be uneaten, in original packaging, and in resellable condition.</li>
          <li><i className="fas fa-undo text-warning me-2"></i>Return shipping costs are the pirate's responsibility unless the return is due to our error.</li>
          <li><i className="fas fa-undo text-warning me-2"></i>Refunds will be processed within 5-7 business days after we receive the returned item.</li>
        </ul>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">6. Marine Intelligence (Privacy)</h3>
        <p>
          Your personal information (name, bounty, crew affiliation) is collected and used in accordance with our Privacy Policy. By using our site, you consent to the collection and use of your information. Don't worry, the Marines won't find out... probably!
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">7. One Piece Copyright</h3>
        <p>
          All content on this website, including text, graphics, logos, images, and Devil Fruit designs, is inspired by the legendary manga/anime "One Piece" by Eiichiro Oda. This is a fan marketplace. We do not claim ownership of One Piece intellectual property. The One Piece is real!
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">8. Pirate Liability</h3>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Devil Fruits or pirate gear. This includes but is not limited to: inability to swim after eating a Devil Fruit, increased bounty from using our weapons, or Marine raids on your ship. Our total liability shall not exceed the amount of Belly paid by you for the product.
        </p>
      </div>

      <div className="card p-4 mb-4">
        <h3 className="mb-3">9. Contact the Captain</h3>
        <p>
          If you have any questions about these Policies, please contact Captain Luffy and the crew:
        </p>
        <ul className="list-unstyled">
          <li><i className="fas fa-envelope me-2"></i>Email: captain@grandpiecestore.com</li>
          <li><i className="fas fa-phone me-2"></i>Den Den Mushi: +63 917 GPO-PIRATE</li>
          <li><i className="fas fa-map-marker-alt me-2"></i>Ship Location: Thousand Sunny, Docked at Water 7</li>
        </ul>
      </div>

      <div className="alert alert-info mt-4">
        <i className="fas fa-info-circle me-2"></i>
        <strong>Last Updated:</strong> January 15, 2026
      </div>
    </div>
  );
};

export default Policies;