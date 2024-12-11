import react from 'react';
function CRHeaderSection() {
    return (
      <div className="relative h-[408h] bg-cover bg-center" style={{ backgroundImage: 'url(/careers.png)' }}>
     
  
        <div className="container mx-auto px-6 py-20 relative z-0">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-[46px] font-poppins font-bold mb-4">Careers</h1>
            <p className="text-xl md:text-[18px] max-md mx-auto">
              Do you want to learn more about Courtney? Our teams looking for people who <br />
              want to work on interesting international projects, develop and learn new skills,<br/>
              and share what they've learned with others.
            </p>
          </div>
        </div>
      </div>
    );
  };
  export default CRHeaderSection;
  