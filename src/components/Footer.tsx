import { Instagram, Facebook, Twitter, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-jet-gray pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-black italic tracking-tighter uppercase mb-6">
              BEFORE & AFTER <br/>
              <span className="text-marine-blue text-glow">DETAILING</span>
            </h3>
            <p className="text-white/50 font-light mb-6 text-sm leading-relaxed">
              Premium automotive detailing in Weslaco, Texas. Restoring and protecting vehicles with meticulous care and the highest quality products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:border-marine-blue hover:text-marine-blue transition-colors bg-jet-black">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:border-marine-blue hover:text-marine-blue transition-colors bg-jet-black">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:border-marine-blue hover:text-marine-blue transition-colors bg-jet-black">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-marine-blue">Services</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Exterior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paint Correction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showroom Prep</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-marine-blue">Contact</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li>2318 E Expressway 83</li>
              <li>Weslaco, TX 78596</li>
              <li>(956) 605-4180</li>
              <li>info@beforeafterdetail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-marine-blue">Trust</h4>
            <div className="bg-jet-black border border-white/10 p-4 inline-flex items-center gap-4 rounded-sm">
              <div className="flex text-marine-blue">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-marine-blue" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg">4.5/5</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Google Reviews</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Before and After Detailing. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
