/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project_properties_priceRange {
  __typename: "Range";
  min: number | null;
  max: number | null;
}

export interface project_project_properties_surfaceRange {
  __typename: "Range";
  min: number | null;
  max: number | null;
}

export interface project_project_properties {
  __typename: "ProjectProperties";
  exposures: (string | null)[] | null;
  typologies: (number | null)[] | null;
  priceRange: project_project_properties_priceRange | null;
  surfaceRange: project_project_properties_surfaceRange | null;
}

export interface project_project {
  __typename: "Project";
  id: string | null;
  name: string | null;
  properties: project_project_properties | null;
}

export interface project {
  project: project_project | null;
}
