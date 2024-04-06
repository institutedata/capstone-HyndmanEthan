# Diagrams for database layout and relationships
[Back to README](/Documents/Word-PDF/README.md)
## Physical model
This model outlines the framework for collecting and displaying users loyalty card stamps and coffee tokens. The relationships established between collections enable the tracking and administration of user and vendor data. 



```mermaid
erDiagram

Vendor ||--|{ VendorInfo : "Enters details for"
Vendor ||--|{ MapPin  : "Map details updated/set ,manually"
VendorInfo ||--|{ MapPin : "address returns lat lng"  
VendorInfo ||--|{ UserLoyaltyCard : "Information used for user cards"  
User ||--|{ UserLoyaltyCard    : "User subscribes to vendor" 
UserLoyaltyCard   }|--|| CardStamps    : "Loyalty card displays stamps"
CardStamps ||--|{ CoffeeTokens : ""

%% User }|--|{ Archive : "View stats/ clear history"  
%% CoffeeTokens ||--|{ Archive : ""
%% Archive }|--|| CardStamps :   ""


User {
    primaryKey userId
    string     username
    string     email
    string     password
}

Vendor  {
    primaryKey vendorId
    string     cafeName
    string     email
    string     password
     
}  

MapPin {
    primaryKey mapPinId
    foreignKey vendorId
    foreignKey vendorId
}
VendorInfo {
    primaryKey vendorInfoId
    foreignKey vendorId
    string     cafeName
    image      vendorLogo
    string     address
    string     content
    string     webLink
    string     instagram
}


%% Will receive up count from in store 
CardStamps {
    primaryKey cardStampId
    foreignKey userId
    foreignKey vendorId
    number     stamps
    date       dateTime
}  


CoffeeTokens {
    primaryKey tokenId
    foreignKey userId
    foreignKey vendorId
    number     tokens   
    date       dateTime
}


UserLoyaltyCard {
    primaryKey userCardId
    foreignKey userId
    foreignKey vendorCardId
    foreignKey cardStampId
    img        vendorLogo
    string     cafeName
    bool       subscribed
    %% Going to remove favorites for the time being to save time
    %% bool       favorite
    number     stamps
    date       dateTime
}



%% Will implement this later if time is available
UserArchive {
    primaryKey userArchiveId
    foreignKey userId
    foreignKey vendorId
    foreignKey cardStampId
    foreignKey tokenId
    number     totalNumberStamps
    number     totalNumberTokens
    date       dateTime
}


VendorArchive {
    primaryKey vendorArchiveId
    foreignKey vendorId
    foreignKey cardStampId
    number     totalNumberStamps
    number     totalNumberTokens
    date       dateTime
}
```
### Diagram breakdown

#### Vendor Processes:

1. Vendors can register.
2. Vendors can provide information about themselves.
3. Vendors can update map details manually.

#### User Processes:

1. Users can register.
2. Users can subscribe to vendors.
3. Users can accumulate stamps on their loyalty cards by purchasing coffee.
4. Users can accumulate and spend coffee tokens. 

#### Interactions:

1. When a user subscribes to a vendor or purchases a coffee, a loyalty card is created for that vendor. 
2. Users can earn stamps on their loyalty cards by making purchases.
3. Users can earn coffee tokens by collecting enough stamps at a single vendor. 



### Archived data

This diagram outlines the structure for storing long-term stats for users and vendors.

```mermaid
erDiagram

User }|--|{ UserArchive : "View stats/ clear history"  
Vendor }|--|{ VendorArchive : "View stats/ clear history"
UserArchive }|--|| CardStamps :   "Stamps earned"
VendorArchive }|--|| CardStamps :   "Stamps given"
UserArchive }|--|| CoffeeTokens :   "Coffee earned"
VendorArchive }|--|| CoffeeTokens :   "Coffee given"

User {
    primaryKey userId
    string     username
    string     email
    string     password
}

Vendor  {
    primaryKey vendorId
    string     cafeName
    string     email
    string     password
     
}  

%% Will recieve up count from instore 
CardStamps {
    primaryKey cardStampId
    foreignKey userId
    foreignKey vendorId
    number     stamps
    date       dateTime
}  


CoffeeTokens {
    primaryKey tokenId
    foreignKey userId
    foreignKey vendorId
    number     tokens   
    date       dateTime
}

%% Will implement this later if time is available
UserArchive {
    primaryKey userArchiveId
    foreignKey userId
    foreignKey vendorId
    foreignKey cardStampId
    foreignKey tokenId
    number     totalNumberStamps
    number     totalNumberTokens
    number     totalNumberTokensSpent
    date       dateTime
}

VendorArchive {
    primaryKey vendorArchiveId
    foreignKey vendorId
    foreignKey cardStampId
    number     totalNumberStamps
    number     totalNumberTokensRedeemed
    date       dateTime
}
```

[Back to top](#)