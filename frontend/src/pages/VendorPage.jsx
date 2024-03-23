import * as React from 'react';


import VendorCard from '../components/vendorTiles/VendorCard';




export default function VendorPage() {
  return (
      <>
      <VendorCard title="Chur Bae" initialFavorite={true} initialSubscribed={true} />
      <VendorCard title="Josy Cafe" initialFavorite={true} initialSubscribed={true}/>
      <VendorCard title="All Press Esspresso" initialFavorite={false} initialSubscribed={true}/>
      <VendorCard title="Big Sur" initialFavorite={false} initialSubscribed={true}/>

      </>
  );
}