import "../style/footer.css"

function Footer() {
  return (
  <div class="footer-container">
    <div class="row">
      <div class="column">
        <ul>
          <li class="li-title">Contact Us</li>
          <li>212.353.8070</li>
          <li>110 W. 40th Street, Suite 2207</li>
          <li>New York, NY 10018</li>
        </ul>
      </div>
      <div class="column">
        <ul>
          <li class="li-title">Emergency Numbers</li>
          <li>NYC Well: 1 (888) 692-9355</li>
          <li>The Samaritans: (212) 673-3000 (24/7)</li>
          <li>Barrier-Free Living: 1 (800) 799-7233 </li>
        </ul>
      </div>
      <div class="column">
        <ul>
          <li class="li-title">Additional Resources</li>
          <li>Board of Elections NYC: 1-212-886-2100</li>
          <li>NYCLU's Voting Team: (212) 607-3300</li>
          <li>Election Protection hotline: (866) OUR-VOTE</li>
        </ul>
      </div>
    </div>
  </div>
  );
}
export default Footer;
