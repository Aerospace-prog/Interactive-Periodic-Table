const periodicTable = [
  [{ symbol: "H", atomicNo: 1 }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { symbol: "He", atomicNo: 2 }],
  [{ symbol: "Li", atomicNo: 3 }, { symbol: "Be", atomicNo: 4 }, null, null, null, null, null, null, null, null, null, null, { symbol: "B", atomicNo: 5 }, { symbol: "C", atomicNo: 6 }, { symbol: "N", atomicNo: 7 }, { symbol: "O", atomicNo: 8 }, { symbol: "F", atomicNo: 9 }, { symbol: "Ne", atomicNo: 10 }],
  [{ symbol: "Na", atomicNo: 11 }, { symbol: "Mg", atomicNo: 12 }, null, null, null, null, null, null, null, null, null, null, { symbol: "Al", atomicNo: 13 }, { symbol: "Si", atomicNo: 14 }, { symbol: "P", atomicNo: 15 }, { symbol: "S", atomicNo: 16 }, { symbol: "Cl", atomicNo: 17 }, { symbol: "Ar", atomicNo: 18 }],
  [{ symbol: "K", atomicNo: 19 }, { symbol: "Ca", atomicNo: 20 }, { symbol: "Sc", atomicNo: 21 }, { symbol: "Ti", atomicNo: 22 }, { symbol: "V", atomicNo: 23 }, { symbol: "Cr", atomicNo: 24 }, { symbol: "Mn", atomicNo: 25 }, { symbol: "Fe", atomicNo: 26 }, { symbol: "Co", atomicNo: 27 }, { symbol: "Ni", atomicNo: 28 }, { symbol: "Cu", atomicNo: 29 }, { symbol: "Zn", atomicNo: 30 }, { symbol: "Ga", atomicNo: 31 }, { symbol: "Ge", atomicNo: 32 }, { symbol: "As", atomicNo: 33 }, { symbol: "Se", atomicNo: 34 }, { symbol: "Br", atomicNo: 35 }, { symbol: "Kr", atomicNo: 36 }],
  [{ symbol: "Rb", atomicNo: 37 }, { symbol: "Sr", atomicNo: 38 }, { symbol: "Y", atomicNo: 39 }, { symbol: "Zr", atomicNo: 40 }, { symbol: "Nb", atomicNo: 41 }, { symbol: "Mo", atomicNo: 42 }, { symbol: "Tc", atomicNo: 43 }, { symbol: "Ru", atomicNo: 44 }, { symbol: "Rh", atomicNo: 45 }, { symbol: "Pd", atomicNo: 46 }, { symbol: "Ag", atomicNo: 47 }, { symbol: "Cd", atomicNo: 48 }, { symbol: "In", atomicNo: 49 }, { symbol: "Sn", atomicNo: 50 }, { symbol: "Sb", atomicNo: 51 }, { symbol: "Te", atomicNo: 52 }, { symbol: "I", atomicNo: 53 }, { symbol: "Xe", atomicNo: 54 }],
  [{ symbol: "Cs", atomicNo: 55 }, { symbol: "Ba", atomicNo: 56 }, { symbol: "La", atomicNo: 57 }, { symbol: "Hf", atomicNo: 72 }, { symbol: "Ta", atomicNo: 73 }, { symbol: "W", atomicNo: 74 }, { symbol: "Re", atomicNo: 75 }, { symbol: "Os", atomicNo: 76 }, { symbol: "Ir", atomicNo: 77 }, { symbol: "Pt", atomicNo: 78 }, { symbol: "Au", atomicNo: 79 }, { symbol: "Hg", atomicNo: 80 }, { symbol: "Tl", atomicNo: 81 }, { symbol: "Pb", atomicNo: 82 }, { symbol: "Bi", atomicNo: 83 }, { symbol: "Po", atomicNo: 84 }, { symbol: "At", atomicNo: 85 }, { symbol: "Rn", atomicNo: 86 }],
  [{ symbol: "Fr ", atomicNo: 87 }, { symbol: "Ra", atomicNo: 88 }, { symbol: "Ac", atomicNo: 89 }, { symbol: "Rf", atomicNo: 104 }, { symbol: "Db", atomicNo: 105 }, { symbol: "Sg", atomicNo: 106 }, { symbol: "Bh", atomicNo: 107 }, { symbol: "Hs", atomicNo: 108 }, { symbol: "Mt", atomicNo: 109 }, { symbol: "Ds", atomicNo: 110 }, { symbol: "Rg", atomicNo: 111 }, { symbol: "Cn", atomicNo: 112 }, { symbol: "Nh", atomicNo: 113 }, { symbol: "Fl", atomicNo: 114 }, { symbol: "Mc", atomicNo: 115 }, { symbol: "Lv", atomicNo: 116 }, { symbol: "Ts", atomicNo: 117 }, { symbol: "Og", atomicNo: 118 }]
];

const fBlockElements = [
  { symbol: "La", atomicNo: 57 },
  { symbol: "Ce", atomicNo: 58 },
  { symbol: "Pr", atomicNo: 59 },
  { symbol: "Nd", atomicNo: 60 },
  { symbol: "Pm", atomicNo: 61 },
  { symbol: "Sm", atomicNo: 62 },
  { symbol: "Eu", atomicNo: 63 },
  { symbol: "Gd", atomicNo: 64 },
  { symbol: "Tb", atomicNo: 65 },
  { symbol: "Dy", atomicNo: 66 },
  { symbol: "Ho", atomicNo: 67 },
  { symbol: "Er", atomicNo: 68 },
  { symbol: "Tm", atomicNo: 69 },
  { symbol: "Yb", atomicNo: 70 },
  { symbol: "Lu", atomicNo: 71 }
];

const actinideElements = [
  { symbol: "Ac", atomicNo: 89 },
  { symbol: "Th", atomicNo: 90 },
  { symbol: "Pa", atomicNo: 91 },
  { symbol: "U",  atomicNo: 92 },
  { symbol: "Np", atomicNo: 93 },
  { symbol: "Pu", atomicNo: 94 },
  { symbol: "Am", atomicNo: 95 },
  { symbol: "Cm", atomicNo: 96 },
  { symbol: "Bk", atomicNo: 97 },
  { symbol: "Cf", atomicNo: 98 },
  { symbol: "Es", atomicNo: 99 },
  { symbol: "Fm", atomicNo: 100 },
  { symbol: "Md", atomicNo: 101 },
  { symbol: "No", atomicNo: 102 },
  { symbol: "Lr", atomicNo: 103 }
];

const fBlock = [
  { label: "Lanthanides", elements: fBlockElements },
  { label: "Actinides", elements: actinideElements }
];