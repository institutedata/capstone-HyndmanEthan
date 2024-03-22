# Workflow Diagrams

## User Workflow
This diagram outlines the end users workflow as they navigate the program.

### Mermaid Diagram
```mermaid
---
title: User Workflow
---
flowchart TD

A([Start])
B([Is registered])
C{Sign up}
D[Sign in]
E[Home screen]
F[Map]
G[Vendors]
H[Freebies]
I[Account settings]
J{Subscribe to a vendor}
K{Redeem token}
L([Number of Stamps])
M{Change settings}
N([Vendor locations])
O([Coffee tokens])


subgraph Key
    Square[Page]
    Round([State or value])
    Input{Editable field}
    end
    A --> B
    B -->|No| C
    B -->|Yes| D
    C --> D
    D <-->|Logout/Login| E
    E <--> F;
    E ===|Check a vendor card| L
    E <--> G;
    E <--> H;
    E <--> I;
    F --o J;
    G --o J
    H --o K
    I --o M
    F === |Check| N
    H ===|Check| O
```
### Diagram breakdown

**Key:**
- **Page:** A page rendered within the application
- **State or value:** User state or non-interactive information.
- **Editable field:** Interactive information or fields used to update backend data


**Start:** <br>

**Registration status:** <br>
- Check if the user is registered.<br>
- If not registered, proceed to sign up. <br>

**Sign up:** <br>
- User signs up for account. <br>
- Once or if already registered, proceed to sign in. <br>

**Sign in:** <br> 
- The user signs in and is taken to the home screen. <br>

**Home screen:**
- The user lands on the home screen.<br>
- From here, the user can navigate to different pages such as the map, vendors, freebies, and account settings interchangeably.<br>
- The number of stamps can be checked for any subscribed vendor <br>

**Map:** <br>
- User views the map, can use the search function or tap on vendor pins for more information. <br>

**Vendors:** <br>
- The user views available vendors.
**Freebies:** <br>
- The user can view available coffee tokens and redeem tokens from this page.<br>

**Account settings:** <br> 
- The user accesses and change their account settings. <br><br>


## Vendor WorkFlow
Vendor workflow is outlined in the following diagram.

### Mermaid Diagram
```mermaid
---
title: Vendor Workflow
---
flowchart TD

A([Start])
B([Is registered])
C{Sign up}
D[Sign in]
E[Landing page]
F[Cafe information]
G[Map pin settings]
H[Account settings]
I{Cafe data}
J{Map pins}
K{Account data}
L([Stamp & token history])



subgraph Key
    Square[Page]
    Round([State or value])
    Input{Backend data}
    end

    A --> B
    B -->|No| C
    B -->|Yes| D
    C --> D
    D <-->|Logout/Login| E
    E ===|check| L
    E <--> F
    E <--> G
    E <--> H
    F --o|update| I
    G --o|update| J
    H --o|update| K

```

### Diagram Breakdown

**Key:**
- **Page:** A page rendered within the application.
- **State or value:** Vendor's state or non-interactive information.
 -**Backend data:** Data fetched or posted from the backend.

**Start:** <br><br>

**Registration status:** <br>
- Check if the vendor is registered.<br>
- If not registered, proceed to sign up. <br>

**Sign up:** <br>
- Vendor signs up for account. <br>
- Once or if already registered, proceed to sign in. <br>

**Sign in:** <br> 
- The vendor signs in and is taken to the Landing page. <br>

**Landing Page:**<br> 
- The vendor can navigate to different pages such as cafe information, map pin settings, and account settings. <br> 
- The vendor can check stamp and token history. <br> 
**Cafe Information:** <br> 
- Vendor views and updates cafe information. <br> 
**Map Pin Settings:**
- Vendor views and updates map pin settings. <br> 

**Account Settings:**
- Vendor accesses and updates account settings. <br> 

**Stamp & Token History:**
- Vendor checks stamp and token history for their cafe.