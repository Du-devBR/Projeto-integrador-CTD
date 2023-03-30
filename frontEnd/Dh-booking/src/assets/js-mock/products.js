export const products = [
  {
    id: 1,
    date: 'Apr 07 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVhcnRvJTIwZGUlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hotel',
    title: 'Sun VillageRio',
    location: 'Buzios, RJ, 123',
    cidade: 'Rio de Janeiro',
    description: 'A Villa do Sol é um hotel boutique de luxo situado na deslumbrante costa de Bali. Com vistas incríveis do oceano e da natureza exuberante, este hotel oferece uma experiência única para aqueles que buscam privacidade, tranquilidade e exclusividade. Com quartos espaçosos, decoração sofisticada e serviço impecável, a Villa do Sol é a escolha perfeita para quem quer aproveitar tudo o que Bali tem para oferecer em um ambiente de total conforto e elegância.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Pet', 'Carro'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 2,
    date: 'Apr 01 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hostel',
    title: 'Cristo Hostel Ipanema',
    location: 'Ipanema, RJ',
    cidade: 'Rio de Janeiro',
    description: 'The Canal House é um hotel boutique exclusivo que oferece uma experiência única em Amsterdam. Com vista para os canais da cidade, este hotel oferece quartos decorados com elegância, serviço excepcional e instalações de primeira classe. Com uma localização ideal, os hóspedes podem explorar as ruas históricas de Amsterdam a pé, visitar os museus de classe mundial e desfrutar dos restaurantes e bares que fazem da cidade uma das mais vibrantes da Europa.',
    pictures: [
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ],
    offers: ['wi-fi', 'TV', 'Pet'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 3,
    date: 'Apr 04 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1602882392562-aa0e8fdafddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudCUyMHJvb20lMjBuZXclMjB5b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Apartamento',
    title: 'Paulista central view',
    location: 'Avenida Paulista, 1000',
    cidade: 'São Paulo',
    description: 'O Central Park View é um apartamento moderno e luxuoso, localizado no Upper East Side, a poucos passos do Central Park. Com vista para o parque mais famoso do mundo, este apartamento oferece quartos espaçosos, decoração elegante e instalações de alta qualidade. Com uma localização ideal, os hóspedes podem desfrutar dos restaurantes e lojas da região, bem como das atrações culturais de Nova York.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Carro', 'Café da manha'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 4,
    date: 'Apr 09 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwbWFsZGl2YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    category: 'Resort',
    title: 'Coral Reef Resort Bahia',
    location: 'Avenida Oceanica, Salvador',
    cidade: 'Salvador',
    description: 'O Coral Reef Resort é um refúgio paradisíaco situado em uma ilha exclusiva nas Maldivas. Com vista para as águas cristalinas do Oceano Índico, este resort oferece chalés luxuosos, serviço excepcional e instalações de primeira classe. Com uma localização ideal para mergulho, snorkeling e outras atividades aquáticas, os hóspedes podem explorar o recife de coral ao redor da ilha ou simplesmente relaxar nas praias de areia branca enquanto apreciam a vista deslumbrante.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Carro', 'Barco', 'Bicicleta'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 5,
    date: 'Mar 28 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hostel',
    title: 'Villa Brasil',
    location: 'Vila Mariana, SP',
    cidade: 'São Paulo',
    description: 'A Villa Brasil é um hotel elegante e moderno, situado no coração de Copacabana, uma das áreas mais icônicas do Rio de Janeiro. Com quartos espaçosos, piscina na cobertura com vista para o mar, restaurante gourmet e serviço excepcional, este hotel é a escolha perfeita para quem quer desfrutar do melhor que o Brasil tem a oferecer. Com fácil acesso às praias, restaurantes, bares e atrações culturais, a Villa Brasil é o ponto de partida ideal para explorar a cidade maravilhosa.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'Pet'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 6,
    date: 'Apr 16 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVhcnRvJTIwZGUlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hotel',
    title: 'The Royal Kensington',
    location: 'Avenida Padre Cacique',
    cidade: 'Porto Alegre',
    description: 'O The Royal Kensington é um hotel cinco estrelas localizado no coração de Londres. Com uma localização privilegiada próximo aos principais pontos turísticos da cidade, este hotel oferece o máximo em conforto, sofisticação e requinte. Com quartos elegantes, serviço de alta qualidade e instalações de última geração, o The Royal Kensington é uma opção excepcional para viajantes exigentes que querem desfrutar da cidade de Londres em grande estilo. Seja para negócios ou lazer, este hotel é a escolha perfeita para quem quer o melhor que Londres tem a oferecer.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Café'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 7,
    date: 'Apr 28 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1653780494131-1ee44be88287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0JTIwYmFoaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    category: 'Resort',
    title: 'Bahia Beach Resort',
    location: 'Rua das Uvas, 500 - Trancoso',
    cidade: 'Bahia',
    description: 'O Bahia Beach Resort é um resort de luxo situado na pitoresca cidade de Trancoso, na Bahia. Com quartos espaçosos, instalações modernas e vista para o mar, este resort oferece uma experiência inesquecível. Com fácil acesso às praias, restaurantes e lojas da região, os hóspedes podem desfrutar de tudo o que a Bahia tem a oferecer, incluindo música ao vivo, dança e comida deliciosa. Com serviço excepcional e uma atmosfera descontraída, o Bahia Beach Resort é o lugar perfeito para relaxar e recarregar as energias.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Pet', 'Barco'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
  {
    id: 8,
    date: 'Mar 30 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    img: 'https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwcm9vbSUyMHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Apartamento',
    title: 'Pacific Heights Oasis',
    cidade: 'Belo Horizonte',
    location: 'Av. Otacílio Negrão de Lima',
    description: 'O Pacific Heights Oasis é um apartamento elegante e confortável, localizado em uma das áreas mais exclusivas de San Francisco. Com decoração sofisticada, vista panorâmica da cidade e instalações modernas, este apartamento oferece o ambiente perfeito para relaxar e desfrutar da beleza de San Francisco. Com fácil acesso às atrações da cidade, incluindo a Golden Gate Bridge e a Fishermans Wharf, este apartamento é a escolha perfeita para quem quer viver como um local em San Francisco.',
    pictures: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    offers: ['wi-fi', 'Ar-condicionado', 'TV', 'Pet', 'Bicicleta'],
    policies: {
      rules:['Check-out 10:00', 'Não é permitido festas', 'Não fumar'],
      health:['Diretrizes de distanciamento social realacionado ao Coronavirus', 'Detector de fumaças', 'Cameras em areas externas'],
      cancellation:['Adicione as datas da viagem para obter detalhes de cancelamento']
    }
  },
]
