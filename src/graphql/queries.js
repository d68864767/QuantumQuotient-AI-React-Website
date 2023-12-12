const GET_QUANTUM_AI_CONTENT = gql`
  query GetQuantumAIContent {
    quantumAIContent {
      id
      title
    }
  }
`;

export { GET_QUANTUM_AI_CONTENT };
