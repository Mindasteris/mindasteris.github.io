import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto text-center my-10'>
      <h1>About</h1>

      <div className='max-w-[900px] mx-auto text-center shadow-2xl shadow-black rounded-xl'>
        <p className='mx-4 pt-4'>Esu komunikabilus, darbštus, atsakingas darbuotojas nebijantis naujų iššūkių.
            Ieškau darbo Informacinių Technologijų, Programuotojo, IT Administratoriaus, Visuomeninio darbo
            srityse. Turiu nemažai patirties susijusia su Informacinėmis Technologijomis,
            programine įranga, techninėmis charakteristikomis, taip pat sandėliavimu,
            gamyba, užsakymų rinkimu, pavestų užduočių atlikimą, darbo organizavimu ir kt.
            Puikiai dirbu kompiuteriu, turiu vairavimo pažymėjimą, galiu vairuoti
            elektrokrautuvą (valdyti kitus techninius prietaisus).
            Išklausyti kursai, įgauti stiprūs programavimo pagrindai: html, css, javascript, php,
            python. Dirbta su frameworks PHP Laravel, Javascript React.
            Baigta žiniatinklio programavimo specialybė.
            Domina programavimas.
            Domiuosi apie IT administravimą, kompiuterinių tinklų infrastruktūrą, virtualizaciją.
            <br />
            Noriu augti ir tobulėti, kartu su šios srities specialistais.
          </p>

           <div className='pt-4'>
             <span className='font-semibold'>Windows Server:</span>
              <ul>
                <li>Active Directory</li>
                <li>DNS</li>
                <li>DHCP</li>
                <li>Group Policy</li>
                <li>File Sharing/Permissions</li>
                <li>Micorosft 365 Admin</li>
              </ul>
           </div>

           <div className='pt-4'>
             <span className='font-semibold'>Programming:</span>
              <ul>
                <li>HTML (Markup Langugage)</li>
                <li>CSS (Styling Web)</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
           </div>
          <p className='pt-4'>Esu pasiryžęs mokytis ir tobulėti, lankyti seminarus ar kitus mokymus.</p>

          <div className='pb-4'>
            <h2 className='py-4 font-semibold'>Github nuoroda:</h2>
            <a className='italic p-2 rounded-lg hover:bg-black hover:text-white' href="https://github.com/Mindasteris" target='_blank'>github.com/Mindasteris</a>
          </div>
      </div>
    </div>
  )
}

export default About