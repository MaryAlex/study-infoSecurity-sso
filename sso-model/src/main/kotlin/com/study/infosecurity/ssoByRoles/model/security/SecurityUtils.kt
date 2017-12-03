package com.study.infosecurity.ssoByRoles.model.security

import java.security.MessageDigest
import java.security.NoSuchAlgorithmException
import kotlin.experimental.and

private val SHA_256 = "SHA-256"

fun getHash(string: String): String {
    var hashedString: String = ""
    try {
        val messageDigest = MessageDigest.getInstance(SHA_256)
        messageDigest.reset()
        messageDigest.update(string.toByteArray())
        val bytes = messageDigest.digest()
        hashedString = byteArrayToString(bytes)
    } catch (e: NoSuchAlgorithmException) {
        e.printStackTrace()
    }

    return hashedString
}

private fun byteArrayToString(bytes: ByteArray): String {
    val sb = StringBuilder()
    for (aByte in bytes) {
        sb.append(Integer.toString((aByte and 0xff.toByte()) + 0x100, 16).substring(1))
    }
    return sb.toString()
}