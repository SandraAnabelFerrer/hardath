/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601081526020017f4d79204861726468617420546f6b656e000000000000000000000000000000008152506000908051906020019061004f92919061013c565b506040518060400160405280600381526020017f4d485400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061013c565b50620f42406002553480156100af57600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610240565b828054610148906101df565b90600052602060002090601f01602090048101928261016a57600085556101b1565b82601f1061018357805160ff19168380011785556101b1565b828001600101855582156101b1579182015b828111156101b0578251825591602001919060010190610195565b5b5090506101be91906101c2565b5090565b5b808211156101db5760008160009055506001016101c3565b5090565b600060028204905060018216806101f757607f821691505b6020821081141561020b5761020a610211565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6109118061024f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c9190610601565b60405180910390f35b61008d6101b9565b60405161009a919061068f565b60405180910390f35b6100bd60048036038101906100b89190610507565b6101bf565b6040516100ca919061068f565b60405180910390f35b6100db610208565b6040516100e891906105e6565b60405180910390f35b6100f961022e565b6040516101069190610601565b60405180910390f35b61012960048036038101906101249190610530565b6102bc565b005b60008054610138906107bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610164906107bf565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b906107bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610267906107bf565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103359061066f565b60405180910390fd5b6103626040518060600160405280602481526020016108b860249139338484610412565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b1919061071c565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461040791906106c6565b925050819055505050565b6104ae8484848460405160240161042c9493929190610623565b6040516020818303038152906040527f6eb7943d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b4565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000813590506104ec81610889565b92915050565b600081359050610501816108a0565b92915050565b60006020828403121561051957600080fd5b6000610527848285016104dd565b91505092915050565b6000806040838503121561054357600080fd5b6000610551858286016104dd565b9250506020610562858286016104f2565b9150509250929050565b61057581610750565b82525050565b6000610586826106aa565b61059081856106b5565b93506105a081856020860161078c565b6105a98161084f565b840191505092915050565b60006105c16011836106b5565b91506105cc82610860565b602082019050919050565b6105e081610782565b82525050565b60006020820190506105fb600083018461056c565b92915050565b6000602082019050818103600083015261061b818461057b565b905092915050565b6000608082019050818103600083015261063d818761057b565b905061064c602083018661056c565b610659604083018561056c565b61066660608301846105d7565b95945050505050565b60006020820190508181036000830152610688816105b4565b9050919050565b60006020820190506106a460008301846105d7565b92915050565b600081519050919050565b600082825260208201905092915050565b60006106d182610782565b91506106dc83610782565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610711576107106107f1565b5b828201905092915050565b600061072782610782565b915061073283610782565b925082821015610745576107446107f1565b5b828203905092915050565b600061075b82610762565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156107aa57808201518184015260208101905061078f565b838111156107b9576000848401525b50505050565b600060028204905060018216806107d757607f821691505b602082108114156107eb576107ea610820565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b61089281610750565b811461089d57600080fd5b50565b6108a981610782565b81146108b457600080fd5b5056fe5472616e7366657272696e672066726f6d20257320746f20257320257320746f6b656e73a2646970667358221220db6b5c25e9ab1f7a6584c333b3610ffe18a6e9bdce0dfeed6ba56c83f3a7502364736f6c63430008040033";

export class Token__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
