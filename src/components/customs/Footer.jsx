import { Button } from "../ui/button";

   function Footer() {
     return (
       <footer className="bg-gray-800 text-white py-4">
         <div className="container mx-auto text-center">
           <p className="text-sm">© 2025 Personal Blog. All rights reserved.</p>
           <div className="mt-2 flex justify-center gap-4">
             <Button variant="link" className="text-white hover:text-gray-300">
               <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                 GitHub
               </a>
             </Button>
             <Button variant="link" className="text-white hover:text-gray-300">
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                 Twitter
               </a>
             </Button>
           </div>
         </div>
       </footer>
     );
   }

   export default Footer;