/**
 * Mock Product Data
 * Minimalist Luxury E-Commerce Product Catalog
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  details?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Handbag",
    price: 299,
    originalPrice: 399,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-2_1771385918000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTJfMTc3MTM4NTkxODAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BsJt80DCmgvwgraNxSb8A-sH8rz5vpyFiDy3cNmVAXFaHPk63z4yvyLPxPxjFfzim6h8DZAoy4dmShwXj6HGg6Qv0LMl5iPlJxELvpc-8dS5OJXdSjuSxxjlb2iiKQkKTTXoFz~qgSF~dmYLMJRuX4bwSF83MfSc6XFfU2HIWqGDvbnRbocj8eUuMsO48jvs0UR84oFIdbABdmGyvAuBgLdrytYeN7y3T8sXlfPSh0QGcMSQTsgXYwSXjePfOPmIsugPlgBXhWtCVb93neMeCk5uJeUJM6hfuJmlQz4Jjx0y2E~LFkiscRksU7txao2-62Ea9sVvgstgrA2-kPeAcQ__",
    category: "Accessories",
    rating: 4.8,
    reviewCount: 156,
    description: "Elegant leather handbag crafted from premium Italian leather with gold hardware accents.",
    details: ["Italian leather", "Gold hardware", "Adjustable strap", "Interior pockets"],
    inStock: true,
  },
  {
    id: "2",
    name: "Luxury Watch",
    price: 549,
    originalPrice: 699,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-3_1771385916000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTNfMTc3MTM4NTkxNjAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iDTg2rfehspxv6MTbJTCN2JEFZhbS67y09Fq7YpB4pAfJaFkHUI3GdZOvTLLGOaUiFY~w4OOLX0tyIyul6~4zeS8CAvker0-R8rjM~u~xGZY-nySmIWlVC~2fvYQkA08hltS6AxnRFLEpXgFnHMfbxlZ3bxsJWZxPakhzjHuVxq3biUhto2AhDycfDy~F1cEbTEOMIqbygk94Qf8cPyQ1SlcyD7MCv3ULcnegQPg0ZDbNccM3lBuMtG7oQiktvaa6pFUuP4hGs16~olFG5pA4hyUyLdCNolrFursGg3G8KSbEjWk~Qx6Vn8aEQuSoRwYVjZ6nxnmNDh-qfAWBHhXng__",
    category: "Watches",
    rating: 4.9,
    reviewCount: 243,
    description: "Swiss-inspired automatic watch with emerald dial and premium leather strap.",
    details: ["Stainless steel case", "Automatic movement", "Leather strap", "Water resistant 50m"],
    inStock: true,
  },
  {
    id: "3",
    name: "Oxford Leather Shoes",
    price: 199,
    originalPrice: 279,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-4_1771385920000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTRfMTc3MTM4NTkyMDAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=THZPXt6L5izSfaeArSCchZzXWGGfzweSprZVybe3RRAGzmB4h-7c3MapCzB4PxD3kj9e8V~SKsQQ87QKgJN~jGfgQfaT7iKh9WTgTNwSIYM3Pw1yZyzsHOuTlmffLzT0JAddx1dtdl4xtWf0JdCzYSlXycDXX0maNm5~puTlAWuptftGnFNM08TgNsGCMto-dMQ4m1jksk4OJ18j0YJN2iramAlVXalt2gWStRmzi1kM8nN9vmSscrA9l0PNIIbPQoh~Gkdss9~Ysth9G1QfP7kFnuGD1Y-dASgIm~eDAEc8K-vLACzODjsxQ~p3cS09C~OEn3ONjScYD59a9ebfrw__",
    category: "Footwear",
    rating: 4.7,
    reviewCount: 89,
    description: "Classic caramel leather oxford shoes with superior comfort and timeless style.",
    details: ["Full grain leather", "Leather sole", "Cushioned insole", "Handcrafted"],
    inStock: true,
  },
  {
    id: "4",
    name: "Premium Sunglasses",
    price: 249,
    originalPrice: 349,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-1_1771385921000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTFfMTc3MTM4NTkyMTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JGSWL6gORhsB3LegUUH80eK0m74QMdavTeYA1EqsqSrlEDkogtTMR7E9N8mwbK3ih-l7~b-WuLRmBUCdaWqbs6JX9By0xRZUNHqKZnNG6tIopp3cT69dbclS0dgUYsLDIbE-BHrvOoZKBAM5CJLL0CbIpPyZoG6N38kuguumrDFDmVGda9s60P92vCU5mChVxasCX6LUrUM0hdNVgEtxQ4UrVtwQmgyN6afdZSPYHJoEyMkQ-pxt-Z-Tx0jKlRBfd9NVhkX8ZEZvvUS9osvv0kFAaCyyHJFhfILkSYmzvnKaP9YUeINzZ5Vti2APj5w2TKlVvhuLlIsA0ygsBAY8Lg__",
    category: "Accessories",
    rating: 4.6,
    reviewCount: 127,
    description: "Sophisticated sunglasses with UV protection and premium acetate frames.",
    details: ["UV 400 protection", "Polarized lenses", "Acetate frames", "Includes case"],
    inStock: true,
  },
  {
    id: "5",
    name: "Silk Scarf",
    price: 129,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-2_1771385918000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTJfMTc3MTM4NTkxODAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BsJt80DCmgvwgraNxSb8A-sH8rz5vpyFiDy3cNmVAXFaHPk63z4yvyLPxPxjFfzim6h8DZAoy4dmShwXj6HGg6Qv0LMl5iPlJxELvpc-8dS5OJXdSjuSxxjlb2iiKQkKTTXoFz~qgSF~dmYLMJRuX4bwSF83MfSc6XFfU2HIWqGDvbnRbocj8eUuMsO48jvs0UR84oFIdbABdmGyvAuBgLdrytYeN7y3T8sXlfPSh0QGcMSQTsgXYwSXjePfOPmIsugPlgBXhWtCVb93neMeCk5uJeUJM6hfuJmlQz4Jjx0y2E~LFkiscRksU7txao2-62Ea9sVvgstgrA2-kPeAcQ__",
    category: "Accessories",
    rating: 4.5,
    reviewCount: 64,
    description: "Pure silk scarf with elegant patterns, perfect for any occasion.",
    details: ["100% silk", "Hand-rolled edges", "Lightweight", "Versatile styling"],
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 99,
    originalPrice: 149,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-3_1771385916000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTNfMTc3MTM4NTkxNjAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iDTg2rfehspxv6MTbJTCN2JEFZhbS67y09Fq7YpB4pAfJaFkHUI3GdZOvTLLGOaUiFY~w4OOLX0tyIyul6~4zeS8CAvker0-R8rjM~u~xGZY-nySmIWlVC~2fvYQkA08hltS6AxnRFLEpXgFnHMfbxlZ3bxsJWZxPakhzjHuVxq3biUhto2AhDycfDy~F1cEbTEOMIqbygk94Qf8cPyQ1SlcyD7MCv3ULcnegQPg0ZDbNccM3lBuMtG7oQiktvaa6pFUuP4hGs16~olFG5pA4hyUyLdCNolrFursGg3G8KSbEjWk~Qx6Vn8aEQuSoRwYVjZ6nxnmNDh-qfAWBHhXng__",
    category: "Accessories",
    rating: 4.4,
    reviewCount: 98,
    description: "Compact leather wallet with RFID protection and multiple card slots.",
    details: ["RFID protected", "Full grain leather", "8 card slots", "Slim design"],
    inStock: true,
  },
  {
    id: "7",
    name: "Cashmere Sweater",
    price: 399,
    originalPrice: 599,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-4_1771385920000_na1fn_ZmVhdHVyZWQtcHJvZHVjdC0z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTRfMTc3MTM4NTkyMDAwMF9uYTFmbl9abVZoZEhWeVpXUXRjSEp2WkhWamRDMHoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=THZPXt6L5izSfaeArSCchZzXWGGfzweSprZVybe3RRAGzmB4h-7c3MapCzB4PxD3kj9e8V~SKsQQ87QKgJN~jGfgQfaT7iKh9WTgTNwSIYM3Pw1yZyzsHOuTlmffLzT0JAddx1dtdl4xtWf0JdCzYSlXycDXX0maNm5~puTlAWuptftGnFNM08TgNsGCMto-dMQ4m1jksk4OJ18j0YJN2iramAlVXalt2gWStRmzi1kM8nN9vmSscrA9l0PNIIbPQoh~Gkdss9~Ysth9G1QfP7kFnuGD1Y-dASgIm~eDAEc8K-vLACzODjsxQ~p3cS09C~OEn3ONjScYD59a9ebfrw__",
    category: "Clothing",
    rating: 4.9,
    reviewCount: 201,
    description: "Luxurious pure cashmere sweater with impeccable craftsmanship.",
    details: ["100% cashmere", "Italian knit", "Machine washable", "Available in 5 colors"],
    inStock: true,
  },
  {
    id: "8",
    name: "Designer Backpack",
    price: 349,
    originalPrice: 499,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-1_1771385921000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTFfMTc3MTM4NTkyMTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JGSWL6gORhsB3LegUUH80eK0m74QMdavTeYA1EqsqSrlEDkogtTMR7E9N8mwbK3ih-l7~b-WuLRmBUCdaWqbs6JX9By0xRZUNHqKZnNG6tIopp3cT69dbclS0dgUYsLDIbE-BHrvOoZKBAM5CJLL0CbIpPyZoG6N38kuguumrDFDmVGda9s60P92vCU5mChVxasCX6LUrUM0hdNVgEtxQ4UrVtwQmgyN6afdZSPYHJoEyMkQ-pxt-Z-Tx0jKlRBfd9NVhkX8ZEZvvUS9osvv0kFAaCyyHJFhfILkSYmzvnKaP9YUeINzZ5Vti2APj5w2TKlVvhuLlIsA0ygsBAY8Lg__",
    category: "Accessories",
    rating: 4.7,
    reviewCount: 145,
    description: "Sophisticated backpack with laptop compartment and premium materials.",
    details: ["Laptop compartment", "Water resistant", "Leather trim", "Ergonomic straps"],
    inStock: false,
  },
];

export const categories = [
  "All",
  "Accessories",
  "Watches",
  "Footwear",
  "Clothing",
];

export const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $250", min: 100, max: 250 },
  { label: "$250 - $500", min: 250, max: 500 },
  { label: "Over $500", min: 500, max: Infinity },
];
