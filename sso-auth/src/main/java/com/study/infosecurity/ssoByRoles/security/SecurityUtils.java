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
            byte[] bytes = messageDigest.digest();
            hashedString = byteArrayToString(bytes);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return hashedString;
    }

    private static String byteArrayToString(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte aByte : bytes) {
            sb.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));
        }
        return sb.toString();
    }
}
