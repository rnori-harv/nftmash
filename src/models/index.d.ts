import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CaptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CandidateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Caption {
  readonly id: string;
  readonly body?: string;
  readonly User?: User;
  readonly likes?: number;
  readonly candidateID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Caption, CaptionMetaData>);
  static copyOf(source: Caption, mutator: (draft: MutableModel<Caption, CaptionMetaData>) => MutableModel<Caption, CaptionMetaData> | void): Caption;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly role?: string;
  readonly email?: string;
  readonly profile?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Candidate {
  readonly id: string;
  readonly likes?: number;
  readonly postTime?: string;
  readonly Artist?: User;
  readonly source?: string;
  readonly Captions?: (Caption | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Candidate, CandidateMetaData>);
  static copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate, CandidateMetaData>) => MutableModel<Candidate, CandidateMetaData> | void): Candidate;
}