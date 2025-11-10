export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-inter text-2xl font-bold mb-4">Every Morning Cartel</h3>
            <p className="font-inter opacity-80">
              Premium specialty coffee in the heart of Mumbai.
            </p>
          </div>

          <div>
            <h4 className="font-space-grotesk text-lg mb-4">Visit Us</h4>
            <p className="font-inter opacity-80">
              [Ground floor, Ladiwala bhavan, Shop no, 1 & 2, SV Rd, Kandivali West, Mumbai, Maharashtra 400067]<br />
              Mumbai, India<br />
              Mon-Sun: 7AM - 8PM
            </p>
          </div>

          <div>
            <h4 className="font-space-grotesk text-lg mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block font-inter opacity-80 hover:opacity-100 transition-opacity">
                Instagram
              </a>
              <a href="#" className="block font-inter opacity-80 hover:opacity-100 transition-opacity">
                Facebook
              </a>
              <a href="mailto:hello@everymorningcartel.com" className="block font-inter opacity-80 hover:opacity-100 transition-opacity">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-inter opacity-60 text-sm">
            © 2024 Every Morning Cartel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}