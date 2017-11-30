package com.study.infosecurity.ssoByRoles.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class SecurityUtils {
    private static String SHA_256 = "SHA-256";

    public static String getHash(String string) {
        String hashedString = null;
        try {
            MessageDigest messageDigest = MessageDigest.getInstance(SHA_256);
            messageDigest.reset();
            messageDigest.update(string.getBytes());
            byte[] digest = messageDigest.digest();
            hashedString = new String(digest);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return hashedString;
    }
}
