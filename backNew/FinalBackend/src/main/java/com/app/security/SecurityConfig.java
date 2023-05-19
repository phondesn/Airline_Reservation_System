package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity
//@SuppressWarnings("deprecation")
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService uservice;
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(uservice);
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
//		return NoOpPasswordEncoder.getInstance();
//		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/user/allcomplaints/**").hasRole("ADMIN")
			.antMatchers("/user/allfeedbacks/**").hasRole("ADMIN")
			.antMatchers("/user/updatecomplaint/**").hasRole("CRM")
			.antMatchers("/aeroplane/**").hasRole("ADMIN")
			.antMatchers("/user/email").hasRole("CRM")
			.antMatchers("/user").hasRole("CRM")
			.antMatchers("/crm/**").hasRole("CRM")
			.antMatchers("/crm/complaints/{cid}").hasRole("CRM")
			.antMatchers("/aeroplane/**").hasRole("FLIGHTMANAGER")
			.antMatchers("/user/{email}").permitAll()
			.antMatchers("/user/userDetails/**").permitAll()
			.antMatchers("/user/home").permitAll()
			.antMatchers("/user/**").hasRole("USER")
			.antMatchers("/user/allflightswithdoj").permitAll()
			.antMatchers("/user/selectedflight").hasRole("USER")
			.antMatchers("/user/**").hasRole("CRM")
			.antMatchers("/common/**").authenticated()
			.antMatchers("/", "/authenticate", "/meals").permitAll()
			.and()
			.cors()
			.and()
			.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

}
