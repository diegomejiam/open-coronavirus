/**
 * coronavirus-server - coronavirus-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface LeaveRequest { 
  [key: string]: object | any;


    id?: string;
    leaveReason: number;
    additionalInfo?: string;
    outOfHomeTimestamp?: string;
    backToHomeTimestamp?: string;
    patientId: string;
    status?: number;
}

