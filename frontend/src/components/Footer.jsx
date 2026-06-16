function Footer() {
  return (
     <footer className="bg-[#1e5aa8] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-white">
              AR INFOTEK
            </span>
          </div>

          <p className="text-sm text-gray-200">
            Practical, mentor-led online IT training to accelerate your career.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-orange-300mb-4">
            Programs
          </h5>

          <ul className="space-y-2 text-sm">
            <li>AWS Architect</li>
            <li>Data Science</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-accent mb-4">
            Company
          </h5>

          <ul className="space-y-2 text-sm">
            <li>Why Us</li>
            <li>Instructors</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-accent mb-4">
            Legal
          </h5>

          <ul className="space-y-2 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-300 mt-12 border-t border-white/10 pt-6">
        © 2025 AR INFOTEK – All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;