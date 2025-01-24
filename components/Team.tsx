import React, { useState } from 'react'
import Team_Profile from './Team_Profile';

const team24 = [
  { name: 'Chakradhar', batch: '2024', img: '' },
  { name: 'chakradhar', batch: '2024', img: '' },
];

const team23 = [
  { name: 'Adithiya bhaiya', batch: '2023', img: '' },
  { name: 'ashwin bhaiya', batch: '2023', img: '' },
];

const team22 = [
  { name: 'nikhil bhaiya', batch: '2022', img: '' },
  { name: 'shivaang bhaiya', batch: '2022', img: '' },
];

const team21 = [
  { name: 'one', batch: '2021', img: '' },
  { name: 'badal bhaiya', batch: '2021', img: '' },
];

const team20 = [
  { name: 'zero', batch: '2020', img: '' },
  { name: 'one', batch: '2020', img: '' },
];

const team19 = [
  { name: 'two', batch: '2019', img: '' },
  { name: 'three', batch: '2019', img: '' },
];

const team25 = [
  { name: 'four', batch: '2025', img: '' },
  { name: 'five', batch: '2025', img: '' },
];

const teams = [
  { year: '2025', members: team25 },
  { year: '2024', members: team24 },
  { year: '2023', members: team23 },
  { year: '2022', members: team22 },
  { year: '2021', members: team21 },
  { year: '2020', members: team20 },
  { year: '2019', members: team19 },
];

export const Team = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className='page4 p-6 flex flex-col team-container'>
      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='flex flex-1 md:p-6 '>
          <div className='flex flex-col'>
            <p className='md:text-4xl font-extrabold text-xl md:font-semibold'>TEAM</p>
            <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
              <div className='h-fit' style={{ height: 200, width: 200, backgroundColor: 'gray' }}>Placeholder</div>
            </div>
            <p className='font-paragraph_font text-xs md:text-lg my-6 lg:text-md md:mt-4'>
              CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreneurs, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals across all domains. We believe in building the world by building its forever recurring addition; a family of inquisitive minds.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        {teams.map((team, index) => (
          <div key={index} className='flex flex-col mb-4'>
            <div
              className='cursor-pointer p-4 bg-gray-200 rounded-lg team-year'
              onClick={() => toggleYear(team.year)}
            >
              <h2 className='text-xl font-bold'>{team.year}</h2>
            </div>
            {expandedYear === team.year && (
              <div className='mt-4 team-members'>
                {team.members.map((member, idx) => (
                  <Team_Profile key={idx} name={member.name} batch={member.batch} img={member.img} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team