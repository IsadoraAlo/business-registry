package com.talentpool.businessregistry.dto;

import org.springframework.security.core.userdetails.UserDetails;

public record LoginResponseDTO(String token, UserDetails usuario) {

}
