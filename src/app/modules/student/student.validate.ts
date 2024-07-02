import { z } from 'zod';
import { BloodGroups } from './student.constants';

const SUserNameValidation = z.object({
  firstName: z
    .string()
    .max(20, 'First name cannot be more than 20 characters')
    .trim(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

const SGuardianValidation = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const SLocalGuardianValidation = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const SStudentValidation = z.object({
  id: z.string().optional(),
  name: SUserNameValidation,
  gender: z.enum(['male', 'female']).optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloogGroup: z.enum(BloodGroups).optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: SGuardianValidation,
  localGuardian: SLocalGuardianValidation,
  profileImg: z.string().optional(),
  admissionSemester: z.string(),
});

const SCreateStudentValidation = z.object({
  password: z.string().min(5).optional(),
  student: SStudentValidation,
});

export const StudentValidation = { SCreateStudentValidation };
